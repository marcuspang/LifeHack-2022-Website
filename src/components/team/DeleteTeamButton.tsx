import { Button, ButtonProps, useToast } from '@chakra-ui/react';
import { ErrorMessages } from 'constants/errors';
import { useRouter } from 'next/router';

interface DeleteTeamButtonProps extends ButtonProps {
  teamId: string;
}

const DeleteTeamButton = ({ teamId, ...props }: DeleteTeamButtonProps) => {
  const toast = useToast();
  const router = useRouter();
  const deleteTeam = async () => {
    if (teamId) {
      try {
        await fetch('/api/teams/' + teamId, {
          method: 'DELETE',
        });
        router.back();
        toast({
          status: 'success',
          title: 'Team successfully deleted',
          isClosable: true,
        });
      } catch (error) {
        toast({
          status: 'error',
          title: 'Error leaving team',
          description: ErrorMessages.DEFAULT,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Button variant="theme" onClick={deleteTeam} {...props}>
      Delete team
    </Button>
  );
};

export default DeleteTeamButton;
