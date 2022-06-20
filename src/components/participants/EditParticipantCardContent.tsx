import { Box, Flex, Heading, Link, List, Stack, Text } from '@chakra-ui/react';
import { Team, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import useSWR from 'swr';
import MemberDetails from '../team/TeamMemberDetails';

interface EditParticipantCardContentProps {
  userId: string;
}

const EditParticipantCardContent = ({ userId }: EditParticipantCardContentProps) => {
  const { data, isValidating } = useSWR<
    User & { requestee: User[]; requestor: User[]; team: Team }
  >('/api/users/' + userId);

  if (isValidating) {
    return <Loader />;
  }

  if (!data || !userId) {
    return (
      <Heading as="h2" size="lg">
        No such team
      </Heading>
    );
  }

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
          <Link href={'/teams/' + data.teamId}>{data.team.name}</Link>
        </Text>
        <Heading size="md" as="h3" pt={6}>
          Team requests received
        </Heading>
        {data.requestee.length && (
          <List spacing={3}>
            {data.requestee.map((requestee, index) => (
              <MemberDetails key={index + '.' + requestee.email} user={requestee} />
            ))}
          </List>
        )}
        <Heading size="md" as="h3" pt={6}>
          Team requests sent
        </Heading>
        {data.requestee.length && (
          <List spacing={3}>
            {data.requestor.map((requestor, index) => (
              <MemberDetails key={index + '.' + requestor.email} user={requestor} />
            ))}
          </List>
        )}
      </Stack>
    </>
  );
};

export default EditParticipantCardContent;
