import { Role } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

// Admin only route
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email || session.user.role !== Role.ADMIN) {
    return res.status(403).send('Unauthorized');
  }

  const id = req.query.id.toString();

  if (id === '') {
    return res.status(400).send('Invalid parameters');
  }

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          points: true,
          requestee: {
            select: {
              id: true,
              approved: true,
              requestor: {
                select: {
                  name: true,
                  email: true,
                },
              },
            },
          },
          requestor: {
            select: {
              id: true,
              approved: true,
              requestee: {
                select: {
                  name: true,
                  email: true,
                },
              },
            },
          },
          team: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  if (req.method === 'PATCH') {
    const body = JSON.parse(req.body);
    const { id: _, ...updateData } = body;
    try {
      let {
        _sum: { points },
      } = await prisma.user.aggregate({
        _sum: {
          points: true,
        },
        where: {
          team: {
            id: updateData.teamId,
          },
          id: {
            not: id,
          },
        },
      });
      if (!points) {
        points = updateData.points;
      } else {
        points += updateData.points;
      }
      const updateUser = prisma.user.update({
        where: { id },
        data: updateData,
      });
      const updateTeam = prisma.team.update({
        data: { points: points ? points : undefined },
        where: { id: updateData.teamId },
      });
      await prisma.$transaction([updateUser, updateTeam]);

      return res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return res.status(400).send({ error: { message: 'Duplicate email' } });
        }
      }
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
