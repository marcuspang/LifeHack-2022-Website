import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    const { skip, take, name } = req.query;

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
    });
    const count = prisma.team.count({
      where: {
        verified: true,
      },
    });
    const result = await prisma.$transaction([teams, count]);

    // Query params are not passed directly to the query so that we can assign rank to each team
    const [newSkip, newTake] = [isNaN(skip as any) ? 0 : +skip, isNaN(take as any) ? 10 : +take];
    return res.json({
      teams: result[0]
        .map((team, index) => ({ rank: index + 1, ...team }))
        .filter((team) => {
          // For some reason, the input has double quotes around queries
          const nameString =
            name && name.toString() !== ''
              ? name.toString().toLowerCase().replace(/["]/g, '')
              : undefined;
          return nameString === undefined || team.name.toLowerCase().includes(nameString);
        })
        .slice(newSkip)
        .slice(0, newTake),
      count: result[1],
    });
  }

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  return res.status(405).send('Method not allowed');
};
