import { Role } from '@prisma/client';
import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email || session.user.role !== Role.ADMIN) {
    return res.status(403).send('Unauthorized');
  }

  // Get all users for participants
  if (req.method === 'GET') {
    const { skip, take } = req.query;

    const users = prisma.user.findMany({
      orderBy: {
        points: 'desc',
      },
      include: {
        _count: true,
        team: true,
      },
      skip: isNaN(skip as any) ? 0 : +skip,
      take: isNaN(take as any) ? 10 : +take,
    });

    const count = prisma.user.count();
    const result = await prisma.$transaction([users, count]);

    return res.json({ users: result[0], count: result[1] });
  }

  return res.status(405).send('Method not allowed');
};
