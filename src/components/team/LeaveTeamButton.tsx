import { Button, ButtonProps, useToast } from '@chakra-ui/react';
import { useSWRConfig } from 'swr';
import { ErrorMessages } from '../../../constants/errors';

interface LeaveTeamButtonProps extends ButtonProps {
  teamId: string;
}

const LeaveTeamButton = ({ teamId, ...props }: LeaveTeamButtonProps) => {
  const { mutate } = useSWRConfig();
  const toast = useToast();
  const leaveTeam = async () => {
    try {
      await fetch('/api/teams/' + teamId + '/leave', {
        method: 'PATCH',
      });
      await mutate('/api/users/team');
      toast({
        status: 'success',
        title: 'Team successfully created',
        isClosable: true,
      });
    } catch (error) {
      toast({
        status: 'error',
        title: 'Error leaving team',
        description: ErrorMessages.DEFUALT,
        isClosable: true,
      });
    }
  };

  return (
    <Button variant="theme" onClick={leaveTeam} {...props}>
      Leave team
    </Button>
  );
};

export default LeaveTeamButton;
