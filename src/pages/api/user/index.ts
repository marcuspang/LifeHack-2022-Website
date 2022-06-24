import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

// Get the role of a user
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: session.user.email,
        },
        select: {
          role: true,
          team: {
            select: {
              id: true,
              name: true,
              points: true,
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
                    select: {
                      email: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  return res.status(405).send('Method not allowed');
};
