import { Box, Flex, Heading, List, ListIcon, ListItem, Stack, Text, Link } from '@chakra-ui/react';
import { Activities, Team, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import { MdCheckCircle } from 'react-icons/md';
import useSWR from 'swr';
import TeamMemberDetails from '../team/TeamMemberDetails';
import AddParticipantToActivityButton from './AddParticipantToActivityButton';
import AddTeamToActivityButton from './AddTeamToActivityButton';
import NextLink from 'next/link';

interface EditActivitiesCardContentProps {
  activityId: string;
}

export interface EditActivitiesData extends Activities {
  participants: Pick<User, 'name' | 'email' | 'points' | 'id'>[];
  teams: Pick<Team, 'id' | 'name'>[];
}

const EditActivitiesCardContent = ({ activityId }: EditActivitiesCardContentProps) => {
  const { data, isValidating } = useSWR<EditActivitiesData>('/api/activities/' + activityId);

  if (isValidating) {
    return <Loader />;
  }

  if (!data || !activityId) {
    return (
      <Heading as="h2" size="lg">
        No such activity
      </Heading>
    );
  }

  return (
    <>
      <Flex>
        <Box>
          <Heading as="h2" size="lg" display="inline">
            Activity Name
          </Heading>
          <Text fontSize="xl">{data.name}</Text>
        </Box>
      </Flex>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Points
        </Heading>
        <Text fontSize="xl">{data.points}</Text>
      </Stack>
      <Stack py={6}>
        <Heading size="md" as="h3" pt={6}>
          Participants involved
        </Heading>
        {data.participants && data.participants.length && (
          <List spacing={3}>
            {data.participants.map((participants, index) => (
              <TeamMemberDetails
                key={index + '.' + participants.email}
                user={participants}
                withLink
              />
            ))}
          </List>
        )}
        <AddParticipantToActivityButton activityId={activityId} />
        <Heading size="md" as="h3" pt={6}>
          Teams
        </Heading>
        {data.teams && data.teams.length && (
          <List spacing={3} maxHeight="200px" overflowY={'auto'}>
            {data.teams.map((team) => (
              <ListItem key={team.id}>
                <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
                <NextLink href={'/teams/' + team.id} passHref>
                  <Link color="blue.200">{team.name}</Link>
                </NextLink>
              </ListItem>
            ))}
          </List>
        )}
        <AddTeamToActivityButton activityId={activityId} />
      </Stack>
    </>
  );
};

export default EditActivitiesCardContent;
