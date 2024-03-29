import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import isAdmin from 'utils/isAdmin';

// Admin only route
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!isAdmin(session)) {
    return res.status(403).send('Unauthorized');
  }

  const id = req.query.id.toString();

  if (id === '') {
    return res.status(400).send('Invalid parameters');
  }

  if (req.method === 'GET') {
    try {
      const team = await prisma.team.findFirst({
        where: { id },
        include: {
          users: {
            select: {
              id: true,
              email: true,
              name: true,
              points: true,
              activities: {
                select: {
                  id: true,
                  name: true,
                  points: true,
                  participants: {
                    select: {
                      email: true,
                    },
                  },
                },
              },
            },
          },
          teamRequests: {
            select: {
              id: true,
              requestee: {
                select: {
                  email: true,
                  name: true,
                },
              },
              approved: true,
            },
          },
          activities: {
            select: {
              id: true,
              name: true,
              points: true,
              participants: {
                where: {
                  team: {
                    id,
                  },
                },
              },
            },
          },
        },
      });
      return res.status(200).send(team);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  if (req.method === 'PATCH') {
    const body = JSON.parse(req.body);
    const { id: _, ...updateData } = body;
    try {
      await prisma.team.update({
        where: { id },
        data: updateData,
      });
      return res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return res.status(400).send({ error: { message: 'Duplicate team name' } });
        }
      }
      return res.status(400).send(error);
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.team.delete({
        where: { id },
      });
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
