import { Role } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../../../lib/prisma';

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
      const team = await prisma.team.findFirst({
        where: { id },
        select: {
          points: true,
          name: true,
          verified: true,
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
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
