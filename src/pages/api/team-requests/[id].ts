import { Response } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  const id = req.query.id.toString();
  if (id === '') {
    return res.status(400).send('Invalid parameters');
  }

  if (req.method === 'DELETE') {
    try {
      const teamRequest = await prisma.teamRequest.findFirst({
        where: {
          id,
          team: {
            users: {
              some: {
                email: session.user.email,
              },
            },
          },
        },
      });
      if (teamRequest) {
        await prisma.teamRequest.delete({
          where: {
            id: teamRequest.id,
          },
        });
        return res.status(204).json({});
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  if (req.method === 'PATCH') {
    // :id?accept=true
    const teamRequestResponse = req.query.accept.toString() as Response;
    if (!Object.values(Response).includes(teamRequestResponse)) {
      return res.status(400).send('Invalid parameters');
    }

    const team = await prisma.team.findFirst({
      where: {
        teamRequests: {
          some: {
            id,
          },
        },
      },
      select: {
        id: true,
        users: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!team) {
      return res.status(400).send({ error: { message: 'No team found' } });
    }

    if (teamRequestResponse === Response.ACCEPTED && team.users.length >= 4) {
      return res.status(400).send({ error: { message: 'Team has reached maximum capacity of 4' } });
    }

    try {
      const teamRequest = await prisma.teamRequest.update({
        where: {
          id,
        },
        data: {
          approved: teamRequestResponse,
          requestee: {
            connect: {
              email: session.user.email,
            },
          },
        },
        select: {
          id: true,
          team: {
            select: {
              id: true,
            },
          },
        },
      });

      if (teamRequestResponse === Response.ACCEPTED) {
        await prisma.team.update({
          where: {
            id: teamRequest.team.id,
          },
          data: {
            users: {
              connect: [{ email: session.user.email }],
            },
          },
        });
      }
      return res.status(200).json({ message: 'Successfully updated' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
