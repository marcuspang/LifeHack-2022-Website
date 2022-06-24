import { Box, Flex, Heading, Link, List, Stack, Text } from '@chakra-ui/react';
import { Team, TeamRequest, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import TeamRequestDetails from 'components/team/TeamRequestDetails';
import useSWR from 'swr';

interface EditParticipantCardContentProps {
  userId: string;
}

interface UserRequestsInterface extends User {
  requestee: (Pick<TeamRequest, 'id' | 'approved'> & { requestor: Pick<User, 'name' | 'email'> })[];
  requestor: (Pick<TeamRequest, 'id' | 'approved'> & { requestee: Pick<User, 'name' | 'email'> })[];
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
  console.log('here', data);
  return (
    <>
      <Flex>
        <Box>
          <Heading as="h2" size="lg" display="inline">
            Username
          </Heading>
          <Text fontSize="xl">{data.name}</Text>
        </Box>
      </Flex>
      <Flex pt={6}>
        <Box>
          <Heading as="h2" size="lg" display="inline">
            Email
          </Heading>
          <Text fontSize="xl">{data.email}</Text>
        </Box>
      </Flex>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Points
        </Heading>
        <Text fontSize="xl">{data.points}</Text>
      </Stack>
      <Stack py={6}>
        <Heading size="md" as="h3">
          Team Name
        </Heading>
        <Text>
          {data.team ? (
            <Link href={'/teams/' + data.team.id}>{data.team.name}</Link>
          ) : (
            'No team found!'
          )}
        </Text>
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
