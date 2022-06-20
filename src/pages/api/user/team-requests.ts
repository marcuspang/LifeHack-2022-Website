import { Response } from '@prisma/client';
import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

// Get the team requests of a team
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'GET') {
    try {
      const teamRequests = await prisma.teamRequest.findMany({
        where: {
          requestee: {
            email: session.user.email,
          },
          approved: Response.NOT_RESPONDED,
        },
        select: {
          id: true,
          team: {
            select: {
              id: true,
              name: true,
            },
          },
          requestor: {
            select: {
              name: true,
              email: true,
            },
          },
          approved: true,
        },
      });
      return res.status(200).json(teamRequests);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  return res.status(405).send('Method not allowed');
};
