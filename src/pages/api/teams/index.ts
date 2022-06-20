import { Role } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import prisma from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  // Get all teams for leaderboard
  if (req.method === 'GET') {
    const { skip, take } = req.query;

    let teams = null;
    if (session && session.user.role === Role.ADMIN) {
      teams = prisma.team.findMany({
        orderBy: {
          points: 'desc',
        },
        include: {
          _count: true,
          activities: true,
        },
        skip: isNaN(skip as any) ? 0 : +skip,
        take: isNaN(take as any) ? 10 : +take,
      });
    } else {
      teams = prisma.team.findMany({
        select: {
          id: true,
          name: true,
          points: true,
        },
        where: {
          verified: true,
        },
        orderBy: {
          points: 'desc',
        },
        skip: isNaN(skip as any) ? 0 : +skip,
        take: isNaN(take as any) ? 10 : +take,
      });
    }

    const count = prisma.team.count();
    const result = await prisma.$transaction([teams, count]);

    return res.json({ teams: result[0], count: result[1] });
  }

  if (!session || !session.user || !session.user.email) {
    return res.status(403).send('Unauthorized');
  }

  // Create team
  if (req.method === 'POST') {
    if (!req.body.name || req.body.name === '') {
      return res.status(400).send('Invalid inputs');
    }

    // check if user is in a team
    const inTeam = await userHasTeam(session.user.email);
    if (inTeam) {
      return res.status(400).send({
        error: { message: 'User already in team' },
      });
    }

    // create team
    try {
      const team = await prisma.team.create({
        data: {
          name: req.body.name,
          points: 0,
          users: {
            connect: [{ email: session.user.email }],
          },
        },
      });
      return res.status(200).send(team);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return res
            .status(400)
            .send({ error: { message: 'Team with this name already exists.' } });
        }
      }
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};

export const userHasTeam = async (email: string) => {
  const team = await prisma.team.findFirst({
    where: {
      users: {
        some: {
          email,
        },
      },
    },
  });
  return team !== null;
};
