import { Role } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../../lib/prisma';

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
      const activity = await prisma.activities.findFirst({
        where: { id },
        include: {
          participants: true,
          teams: true,
        },
      });
      return res.status(200).send(activity);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  if (req.method === 'PATCH') {
    const body = JSON.parse(req.body);
    const { id: _, ...updateData } = body;
    try {
      const activity = await prisma.activities.findFirst({ where: { id } });
      const updateActivity = prisma.activities.update({
        data: updateData,
        where: {
          id,
        },
      });
      const queries: any[] = [updateActivity];
      if (updateData.points && activity) {
        let updateTeams = null;
        const difference = updateData.points - activity.points;
        if (difference > 0) {
          updateTeams = prisma.team.updateMany({
            data: {
              points: {
                increment: difference,
              },
            },
            where: {
              activities: {
                id,
              },
            },
          });
        } else {
          updateTeams = prisma.team.updateMany({
            data: {
              points: {
                decrement: difference,
              },
            },
            where: {
              activities: {
                id,
              },
            },
          });
        }
        queries.push(updateTeams);
      }
      await prisma.$transaction(queries);

      return res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return res.status(400).send({ error: { message: 'Duplicate email' } });
        }
      }
      console.log(error);
      return res.status(400).send(error);
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.activities.delete({
        where: {
          id,
        },
      });
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
