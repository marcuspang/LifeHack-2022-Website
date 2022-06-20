import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { userHasTeam } from '../teams';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  // Send team request
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    if (!body.teamId || !body.email || body.email === '') {
      return res.status(400).send({ error: { message: 'Invalid inputs' } });
    }

    try {
      // check if requestee is in team already
      const requesteeInTeam = await userHasTeam(body.email);
      if (requesteeInTeam) {
        return res.status(400).send({ error: { message: 'User already in team' } });
      }

      // create team request
      await prisma.teamRequest.create({
        data: {
          team: {
            connect: {
              id: body.teamId,
            },
          },
          requestee: {
            connect: {
              email: body.email,
            },
          },
          requestor: {
            connect: {
              email: session.user.email,
            },
          },
        },
      });
      return res.status(200).json({ message: 'Request successfully created' });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          return res.status(400).send({ error: { message: 'No such user found' } });
        }
      }
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
