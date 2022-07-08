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
    const { id: _id, ...updateData } = body as Prisma.ActivitiesUpdateInput & {
      points?: { increment: number };
    };
    if (!updateData) {
      return res.status(400).send('Invalid parameters');
    }
    try {
      const activity = await prisma.activities.findFirst({ where: { id } });

      // Updates associations also
      const updateActivity = prisma.activities.update({
        data: updateData,
        where: {
          id,
        },
      });
      const queries: any[] = [updateActivity];
      // Update points for existing teams and participants
      if (updateData.points && activity) {
        const points = updateData.points;
        const updateTeams = prisma.team.updateMany({
          data: {
            points,
          },
          where: {
            activities: {
              some: {
                id,
              },
            },
          },
        });
        const updateParticipants = prisma.user.updateMany({
          data: {
            points,
          },
          where: {
            activities: {
              some: {
                id,
              },
            },
          },
        });
        queries.push(updateTeams, updateParticipants);
      }
      // Update points for teams added/removed
      if (updateData.teams && updateData.teams.set && activity) {
        const teamIds = (updateData.teams.set as { id: string }[]).map(
          (item: { id: string }) => item.id
        );
        // Increment points for teams added
        await prisma.team.updateMany({
          where: {
            id: {
              in: teamIds,
            },
            // Ignore team if they have the activity
            activities: {
              none: {
                id,
              },
            },
            // Ignore team if their participants have done the activity
            users: {
              none: {
                activities: {
                  some: {
                    id,
                  },
                },
              },
            },
          },
          data: {
            points: {
              increment: activity.points,
            },
          },
        });
        // Decrement points for teams removed
        await prisma.team.updateMany({
          where: {
            id: {
              notIn: teamIds,
            },
            // Include teams that have the activity previously
            activities: {
              some: {
                id,
              },
            },
            // Ignore teams if users have done the activities
            users: {
              none: {
                activities: {
                  some: {
                    id,
                  },
                },
              },
            },
          },
          data: {
            points: {
              decrement: activity.points,
            },
          },
        });
      }
      // Update points for participants and their respective teams
      if (updateData.participants && updateData.participants.set && activity) {
        const userIds = (updateData.participants.set as { id: string }[]).map(
          (item: { id: string }) => item.id
        );
        // Increment points for users added
        const addPointsToUsers = prisma.user.updateMany({
          where: {
            id: {
              in: userIds,
            },
            // Ignore if they already have the activity
            activities: {
              none: {
                id,
              },
            },
          },
          data: {
            points: {
              increment: activity.points,
            },
          },
        });
        // Increment points for teams who do not have the activity
        // and if they are the only person taking part in the activity
        const addPointsToTeams = prisma.team.updateMany({
          where: {
            users: {
              some: {
                id: {
                  in: userIds,
                },
              },
              none: {
                activities: {
                  some: {
                    id,
                  },
                },
              },
            },
            activities: {
              none: {
                id,
              },
            },
          },
          data: {
            points: {
              increment: activity.points,
            },
          },
        });
        // Decrement points for user removed
        const removePointsFromUsers = prisma.user.updateMany({
          where: {
            id: {
              notIn: userIds,
            },
            // Include users that have the activity previously
            activities: {
              some: {
                id,
              },
            },
          },
          data: {
            points: {
              decrement: activity.points,
            },
          },
        });
        // Decrement points for teams whose participants for the activity has been removed
        const removePointsFromTeams = prisma.team.updateMany({
          where: {
            users: {
              some: {
                activities: {
                  // Find teams with participants in this activity
                  some: {
                    id,
                    // These participants must also be entirely removed from the activity
                    participants: {
                      every: {
                        id: { notIn: userIds },
                      },
                    },
                  },
                },
              },
            },
            // Only decrement points for teams who do not have activities associated with "team"
            activities: {
              none: {
                id,
              },
            },
          },
          data: {
            points: {
              decrement: activity.points,
            },
          },
        });
        const result = await prisma.$transaction([
          addPointsToUsers,
          addPointsToTeams,
          removePointsFromUsers,
          removePointsFromTeams,
        ]);
      }
      await prisma.$transaction(queries);
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

  if (req.method === 'DELETE') {
    try {
      const activityDeleted = await prisma.activities.findFirst({
        select: {
          points: true,
        },
        where: {
          id,
        },
      });
      if (!activityDeleted) {
        return res.status(400).send({ error: { message: 'No activity found' } });
      }
      const removePointsFromUsers = prisma.user.updateMany({
        where: {
          activities: {
            some: {
              id,
            },
          },
        },
        data: {
          points: {
            decrement: activityDeleted.points,
          },
        },
      });
      const removePointsFromTeams = prisma.team.updateMany({
        where: {
          activities: {
            some: {
              id,
            },
          },
        },
        data: {
          points: {
            decrement: activityDeleted.points,
          },
        },
      });
      const deleteActivity = prisma.activities.delete({
        where: { id },
      });

      const result = await prisma.$transaction([
        removePointsFromUsers,
        removePointsFromTeams,
        deleteActivity,
      ]);
      return res.status(204).send(undefined);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  return res.status(405).send('Method not allowed');
};
