import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { Activities, Role, Team, TeamRequest, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { MdCheckCircle, MdClear } from 'react-icons/md';
import useSWR from 'swr';
import InviteTeamMemberButton from './InviteTeamMemberButton';
import LeaveTeamButton from './LeaveTeamButton';
import NoTeamContent from './NoTeamContent';
import MemberDetails from './TeamMemberDetails';

export interface TeamInterface extends Team {
  users: User[];
  teamRequests: (TeamRequest & { requestee: User })[];
  activities: (Activities & { participants: User[] })[];
}

const TeamContent = () => {
  const { data: userData, status } = useSession();
  const router = useRouter();
  const { data, isValidating } = useSWR<TeamInterface>('/api/user/team');

  if (
    (status === 'authenticated' && userData.user.role !== Role.ADMIN) ||
    status === 'unauthenticated'
  ) {
    router.push('/');
    return <Loader />;
  }

  if (status === 'loading' || isValidating) {
    return <Loader />;
  }

  if (!data) {
    return <NoTeamContent />;
  }

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
          <Text height="30px">
            <Icon
              as={data.verified ? MdCheckCircle : MdClear}
              color={data.verified ? 'green.500' : 'red.500'}
              ml={2}
              height="30px"
              width="30px"
            />
          </Text>
        </Tooltip>
      </Flex>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Total Points
        </Heading>
        <Text fontSize="xl">{data.points}</Text>
      </Stack>
      <Stack pt={6}>
        <Heading as="h3" size="md" display="inline">
          Activities Participated
        </Heading>
        <List spacing={3}>
          {data.activities.length &&
            data.activities.map((activity) => (
              <Tooltip
                key={activity.id}
                label={
                  activity.points +
                  ' points by ' +
                  (activity.participants.length > 0
                    ? activity.participants.map((participant) => participant.email).join(', ')
                    : 'the team')
                }
                placement="auto-start"
              >
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
                  {activity.name}
                </ListItem>
              </Tooltip>
            ))}
        </List>
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
            Sent Team Requests
          </Tooltip>
        </Heading>
        {data.teamRequests.length && (
          <List>
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
      <Flex direction="row-reverse">
        <LeaveTeamButton teamId={data.id} />
        <InviteTeamMemberButton teamId={data.id} mr={4} />
      </Flex>
    </>
  );
};

export default TeamContent;
