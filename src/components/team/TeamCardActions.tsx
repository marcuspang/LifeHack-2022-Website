import { Flex } from '@chakra-ui/react';
import AddTeamMemberButton from './AddTeamMemberButton';
import DeleteTeamButton from './DeleteTeamButton';
import InviteTeamMemberButton from './InviteTeamMemberButton';
import LeaveTeamButton from './LeaveTeamButton';

interface TeamCardActionsProps {
  isEditing?: boolean;
  teamId: string;
}

const TeamCardActions = ({ teamId, isEditing }: TeamCardActionsProps) => {
  if (isEditing)
    return (
      <Flex direction="row-reverse">
        <DeleteTeamButton teamId={teamId} />
        <AddTeamMemberButton teamId={teamId} mr={4} />
      </Flex>
    );
  return (
    <Flex direction="row-reverse">
      <LeaveTeamButton teamId={teamId} />
      <InviteTeamMemberButton teamId={teamId} mr={4} />
    </Flex>
  );
};

export default TeamCardActions;
