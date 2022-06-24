import { Stack, Heading, Tooltip, List } from '@chakra-ui/react';
import { TeamInterface } from './TeamContent';
import TeamRequestDetails from './TeamRequestDetails';

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
            <TeamRequestDetails
              key={index + '.' + teamRequest.requestee.email}
              request={{ ...teamRequest, user: { ...teamRequest.requestee } }}
            />
          ))}
        </List>
      )}
    </Stack>
  );
};

export default TeamRequests;
