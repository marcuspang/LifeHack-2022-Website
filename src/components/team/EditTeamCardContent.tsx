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
import Loader from 'components/common/Loader';
import { MdCheckCircle, MdClear } from 'react-icons/md';
import useSWR from 'swr';
import AddTeamMemberButton from './AddTeamMemberButton';
import DeleteTeamButton from './DeleteTeamButton';
import { TeamInterface } from './TeamContent';
import MemberDetails from './TeamMemberDetails';

interface EditTeamCardContentProps {
  teamId: string;
}

const EditTeamCardContent = ({ teamId }: EditTeamCardContentProps) => {
  const { data, isValidating } = useSWR<TeamInterface>('/api/teams/' + teamId);

  if (isValidating) {
    return <Loader />;
  }

  if (!data || !teamId) {
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
            Team Name
          </Heading>
          <Text fontSize="xl">{data.name}</Text>
        </Box>
        <Tooltip
          label={'Your team has ' + (data.verified ? '' : 'not') + ' been verified'}
          placement="bottom"
        >
          <span style={{ height: '24px' }}>
            <Icon
              as={data.verified ? MdCheckCircle : MdClear}
              color={data.verified ? 'green.500' : 'red.500'}
              ml={2}
              height="24px"
              width="24px"
            />
          </span>
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
          {data.users.length &&
            data.users.map((user, index) => (
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
      <Flex direction="row-reverse">
        <DeleteTeamButton teamId={teamId} />
        <AddTeamMemberButton teamId={teamId} mr={4} />
      </Flex>
    </>
  );
};

export default EditTeamCardContent;
