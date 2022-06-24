import { Stack, Heading, Tooltip, List } from '@chakra-ui/react';
import { TeamInterface } from './TeamContent';
import TeamMemberDetails from './TeamMemberDetails';

interface TeamRequestsProps {
  teamRequests: TeamInterface['teamRequests'];
}

const TeamRequests = ({ teamRequests }: TeamRequestsProps) => {
  return (
    <Stack pt={6}>
      <Heading size="md" as="h3" pt={6}>
        <Tooltip label="Any requests sent by your team members will be shown here">
          Sent Team Requests
        </Tooltip>
      </Heading>
      {teamRequests.length && (
        <List>
          {teamRequests.map((teamRequest, index) => (
            <TeamMemberDetails
              key={index + '.' + teamRequest.requestee.email}
              user={teamRequest.requestee}
              request={teamRequest}
            />
          ))}
        </List>
      )}
    </Stack>
  );
};

export default TeamRequests;
