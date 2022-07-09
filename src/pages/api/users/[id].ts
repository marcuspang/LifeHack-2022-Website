import { Prisma } from '@prisma/client';
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
      const user = await prisma.user.findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          points: true,
          activities: {
            select: {
              id: true,
              points: true,
              name: true,
            },
          },
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
    const {
      id: _,
      teamId,
      ...updateData
    } = body as Prisma.UserUpdateInput & { teamId: string | null };
    try {
      const updateUser = prisma.user.update({
        where: { id },
        data: updateData,
      });
      const queries: any[] = [updateUser];
      if (teamId) {
        const updateTeam = prisma.team.update({
          where: { id: teamId },
          data: {
            points: updateData.points,
          },
        });
        queries.push(updateTeam);
      }
      const result = await prisma.$transaction(queries);

      return res.status(200).json({ message: 'Updated successfully', data: result });
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
