import { Team, TeamRequest, User } from '@prisma/client';
import useSWR from 'swr';
import Loader from '../common/Loader';
import AddTeamMemberButton from './AddTeamMemberButton';
import LeaveTeamButton from './LeaveTeamButton';
import MemberDetails from './TeamMemberDetails';
import NoTeamContent from './NoTeamContent';
import { MdCheckCircle, MdClear, MdClose } from 'react-icons/md';
import { Flex, Box, Heading, Tooltip, Stack, List, Text, Icon } from '@chakra-ui/react';

interface TeamInterface extends Team {
  users: User[];
  teamRequests: (TeamRequest & { requestee: User })[];
}

const TeamContent = () => {
  const { data, isValidating } = useSWR<TeamInterface>('api/users/team');

  if (isValidating) {
    return <Loader />;
  }

  if (!data) {
    return <NoTeamContent />;
  }

  let verifiedIcon = data.verified ? MdCheckCircle : MdClear;
  let verifiedIconColour = data.verified ? 'green.500' : 'red.500';

  return (
    <>
      <Flex>
        <Box>
          <Heading as="h2" size="lg" display="inline">
            Team Name
          </Heading>
          <Text fontSize="xl">{data.name}</Text>
        </Box>
        <Tooltip
          label={'Your team has ' + (data.verified ? '' : 'not') + ' been verified'}
          placement="bottom"
        >
          <span style={{ height: '24px' }}>
            <Icon as={verifiedIcon} color={verifiedIconColour} ml={2} height="24px" width="24px" />
          </span>
        </Tooltip>
      </Flex>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Total Points
        </Heading>
        <Text fontSize="xl">{data.points}</Text>
      </Stack>
      <Stack py={6}>
        <Heading size="md" as="h3">
          Members (min 2, max 4)
        </Heading>
        <List spacing={3}>
          {data.users.map((user, index) => (
            <MemberDetails key={index + '.' + user.email} user={user} />
          ))}
        </List>
        <Heading size="md" as="h3" pt={6}>
          <Tooltip label="Any requests sent by your team members will be shown here">
            Sent team requests
          </Tooltip>
        </Heading>
        {data.teamRequests.length && (
          <List spacing={3}>
            {data.teamRequests.map((teamRequest, index) => (
              <MemberDetails
                key={index + '.' + teamRequest.requestee.email}
                user={teamRequest.requestee}
                request={teamRequest}
              />
            ))}
          </List>
        )}
      </Stack>
      <Flex direction={'row-reverse'}>
        <LeaveTeamButton teamId={data.id} />
        <AddTeamMemberButton teamId={data.id} mr={4} />
      </Flex>
    </>
  );
};

export default TeamContent;
