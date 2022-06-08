import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../../../lib/prisma';

// Get the team of a user
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  const id = req.query.id.toString();
  if (id === '') {
    return res.status(400).send('Invalid parameeters');
  }

  if (req.method === 'PATCH') {
    try {
      const team = await prisma.team.findFirst({
        where: {
          users: {
            some: {
              email: session.user.email,
            },
          },
        },
        select: {
          id: true,
          users: {
            select: {
              email: true,
            },
          },
        },
      });

      if (team) {
        const removeUser = prisma.team.update({
          where: { id: team.id },
          data: {
            users: {
              disconnect: {
                email: session.user.email,
              },
            },
          },
        });
        if (team.users.length === 1) {
          const deleteTeam = prisma.team.delete({
            where: {
              id: team.id,
            },
          });
          await prisma.$transaction([removeUser, deleteTeam]);
        } else {
          await removeUser;
        }
      } else {
        return res.status(400).send({ error: { message: 'Team not found' } });
      }

      return res.status(200).json({ message: 'Left successfully' });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  return res.status(405).send('Method not allowed');
};
