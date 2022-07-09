import { Box, Flex, Heading, Link, List, Stack, Text } from '@chakra-ui/react';
import { Activities, Team, TeamRequest, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import TeamRequestDetails from 'components/team/TeamRequestDetails';
import useSWR from 'swr';
import NextLink from 'next/link';
import ActivitiesDetails from 'components/activities/ActivitiesDetails';

interface EditParticipantCardContentProps {
  userId: string;
}

interface UserRequestsInterface extends User {
  requestee: (Pick<TeamRequest, 'id' | 'approved'> & { requestor: Pick<User, 'name' | 'email'> })[];
  requestor: (Pick<TeamRequest, 'id' | 'approved'> & { requestee: Pick<User, 'name' | 'email'> })[];
  activities: Activities[];
  team?: Pick<Team, 'id' | 'name' | 'points'>;
}

const EditParticipantCardContent = ({ userId }: EditParticipantCardContentProps) => {
  const { data, isValidating } = useSWR<UserRequestsInterface>('/api/users/' + userId);

  if (isValidating) {
    return <Loader />;
  }

  if (!data || !userId) {
    return (
      <Heading as="h2" size="lg">
        No such user
      </Heading>
    );
  }
  return (
    <>
      <Flex direction={'column'}>
        <Heading as="h2" size="lg" display="inline">
          Username
        </Heading>
        <Text fontSize="xl">{data.name}</Text>
      </Flex>
      <Flex pt={6} direction="column">
        <Heading as="h2" size="lg" display="inline">
          Email
        </Heading>
        <Box>
          <NextLink href={'mailto:' + data.email} passHref>
            <Link fontSize="xl" color="blue.200">
              {data.email}
            </Link>
          </NextLink>
        </Box>
      </Flex>
      <Flex pt={6} direction="column">
        <Heading as="h2" size="lg" display="inline">
          Team Name
        </Heading>
        <Box>
          {data.team ? (
            <NextLink href={'/teams/' + data.team.id} passHref>
              <Link fontSize={'xl'} color="blue.200">
                {data.team.name}
              </Link>
            </NextLink>
          ) : (
            'No team found!'
          )}
        </Box>
      </Flex>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Points
        </Heading>
        <Text fontSize="xl">{data.points}</Text>
      </Stack>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Activities
        </Heading>
        <List spacing={3}>
          {data.activities.length &&
            data.activities.map((activity) => (
              <ActivitiesDetails key={activity.id} {...activity} />
            ))}
        </List>
      </Stack>
      <Stack py={6}>
        <Heading size="md" as="h3" pt={6}>
          Team requests received
        </Heading>
        {data.requestee.length && (
          <List spacing={3}>
            {data.requestee.map((requestee, index) => (
              <TeamRequestDetails
                key={index + '.' + requestee.id}
                request={{ ...requestee, user: { ...requestee.requestor } }}
              />
            ))}
          </List>
        )}
        <Heading size="md" as="h3" pt={6}>
          Team requests sent
        </Heading>
        {data.requestor.length && (
          <List spacing={3}>
            {data.requestor.map((requestor, index) => (
              <TeamRequestDetails
                key={index + '.' + requestor.id}
                request={{ ...requestor, user: { ...requestor.requestee } }}
              />
            ))}
          </List>
        )}
      </Stack>
    </>
  );
};

export default EditParticipantCardContent;
