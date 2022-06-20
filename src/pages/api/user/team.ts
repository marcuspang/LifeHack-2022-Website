import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

// Get the team of a user
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'GET') {
    try {
      const team = await prisma.team.findFirst({
        where: {
          users: {
            some: {
              email: session.user.email,
            },
          },
        },
        include: {
          users: {
            select: {
              email: true,
              name: true,
              points: true,
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
                    users: {
                      some: {
                        email: session.user.email,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return res.json(team);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  return res.status(405).send('Method not allowed');
};
