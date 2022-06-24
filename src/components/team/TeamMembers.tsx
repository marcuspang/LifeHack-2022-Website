import { Stack, Heading, List } from '@chakra-ui/react';
import { TeamInterface } from './TeamContent';
import TeamMemberDetails from './TeamMemberDetails';

interface TeamMembersProps {
  teamMembers: TeamInterface['users'];
}

const TeamMembers = ({ teamMembers }: TeamMembersProps) => {
  return (
    <Stack pt={6}>
      <Heading size="md" as="h3">
        Members (min 2, max 4)
      </Heading>
      <List spacing={3}>
        {teamMembers.map((user, index) => (
          <TeamMemberDetails key={index + '.' + user.email} user={user} />
        ))}
      </List>
    </Stack>
  );
};

export default TeamMembers;
