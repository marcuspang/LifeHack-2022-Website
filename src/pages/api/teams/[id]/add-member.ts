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

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const { email } = body;

    if (email === '') {
      return res.status(400).send('Invalid parameters');
    }

    try {
      await prisma.team.update({
        where: { id },
        data: {
          users: {
            connect: [{ email }],
          },
        },
      });
      return res.status(200).json({ message: 'Added successfully' });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2018') {
          return res.status(400).send({ error: { message: 'No such user found' } });
        }
      }
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
