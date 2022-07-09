import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import isAdmin from 'utils/isAdmin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!isAdmin(session)) {
    return res.status(403).send('Unauthorized');
  }

  // Get all users for participants
  if (req.method === 'GET') {
    const { skip, take, name, email } = req.query;

    const users = prisma.user.findMany({
      orderBy: {
        points: 'desc',
      },
      include: {
        _count: true,
        team: true,
        activities: true,
      },
      where: {
        name: {
          contains: name && name.toString() !== '' ? name.toString() : undefined,
        },
        email: {
          contains: email && email.toString() !== '' ? email.toString() : undefined,
        },
      },
      skip: isNaN(skip as any) ? undefined : +skip,
      take: isNaN(take as any) ? undefined : +take,
    });

    const count = prisma.user.count();
    const result = await prisma.$transaction([users, count]);

    return res.json({ users: result[0], count: result[1] });
  }

  return res.status(405).send('Method not allowed');
};
