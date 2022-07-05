import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    const { skip, take } = req.query;

    const teams = prisma.team.findMany({
      select: {
        id: true,
        name: true,
        points: true,
      },
      where: {
        verified: true,
      },
      orderBy: [
        {
          points: 'desc',
        },
        {
          name: 'asc',
        },
        {
          updatedAt: 'desc',
        },
      ],
      skip: isNaN(skip as any) ? 0 : +skip,
      take: isNaN(take as any) ? 10 : +take,
    });
    const count = prisma.team.count({
      where: {
        verified: true,
      },
    });
    const result = await prisma.$transaction([teams, count]);

    return res.json({ teams: result[0], count: result[1] });
  }

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  return res.status(405).send('Method not allowed');
};
