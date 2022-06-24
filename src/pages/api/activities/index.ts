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
    const { skip, take } = req.query;

    const activities = prisma.activities.findMany({
      orderBy: {
        points: 'desc',
      },
      include: {
        _count: true,
      },
      skip: isNaN(skip as any) ? 0 : +skip,
      take: isNaN(take as any) ? 10 : +take,
    });

    const count = prisma.activities.count();
    const result = await prisma.$transaction([activities, count]);

    return res.json({ activities: result[0], count: result[1] });
  }

  if (req.method === 'POST') {
    const { name, points } = await JSON.parse(req.body);
    if (!name || name === '' || points === undefined) {
      return res.status(400).send('Invalid inputs');
    }
    try {
      await prisma.activities.create({
        data: { name, points: +points },
      });
      return res.status(200).json({ message: 'Successfully created!' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
