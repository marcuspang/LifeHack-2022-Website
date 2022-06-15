import { Box, Button, Flex, Heading, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { Activities, Team, User } from '@prisma/client';
import useSWR from 'swr';
import Loader from '../common/Loader';
import MemberDetails from '../team/TeamMemberDetails';

interface EditActivitiesCardContentProps {
  activityId: string;
}

const EditActivitiesCardContent = ({ activityId }: EditActivitiesCardContentProps) => {
  const { data, isValidating } = useSWR<Activities & { participants: User[]; teams: Team[] }>(
    '/api/activities/' + activityId
  );

  if (isValidating) {
    return <Loader />;
  }

  if (!data || !activityId) {
    return (
      <Heading as="h2" size="lg">
        No such team
      </Heading>
    );
  }

  console.log(data);

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
        {data.participants.length && (
          <List spacing={3}>
            {data.participants.map((participants, index) => (
              <MemberDetails key={index + '.' + participants.email} user={participants} />
            ))}
          </List>
        )}
        <Box>
          <Button variant="theme">Add participants (not implemented)</Button>
        </Box>
        <Heading size="md" as="h3" pt={6}>
          Teams
        </Heading>
        {data.teams.length && (
          <List spacing={3}>
            {data.teams.map((team) => (
              <ListItem key={team.id}>{team.name}</ListItem>
            ))}
          </List>
        )}
        <Box>
          <Button variant="theme">Add team (not implemented)</Button>
        </Box>
      </Stack>
    </>
  );
};

export default EditActivitiesCardContent;
