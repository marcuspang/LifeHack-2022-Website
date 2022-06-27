import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, useToast } from '@chakra-ui/react';
import useMatchMutate from 'hooks/useMatchMutate';

interface DeleteActivityButtonProps {
  id: string;
}

const DeleteActivityButton = ({ id }: DeleteActivityButtonProps) => {
  const toast = useToast();
  const matchMutate = useMatchMutate();
  const deleteActivity = async (id: string) => {
    try {
      const result = await fetch('/api/activities/' + id, {
        method: 'DELETE',
      });
      await matchMutate(/^\/api\/(team|user|activities)/);
      toast({
        status: 'success',
        title: 'Activity successfully deleted',
        isClosable: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error deleting activity',
          description: error.message,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error deleting activity',
          isClosable: true,
        });
      }
    }
  };
  return (
    <IconButton
      aria-label="Edit activity"
      variant="theme"
      size="sm"
      onClick={() => deleteActivity(id)}
      icon={<DeleteIcon />}
    />
  );
};

export default DeleteActivityButton;
