import { Button, useToast } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { ErrorMessages } from '../../../constants/errors';

const LoginGithubButton = ({ newAccount }: { newAccount?: boolean }) => {
  const { status } = useSession();
  const toast = useToast();

  const handleClick = async () => {
    try {
      await signIn('github');
    } catch (error) {
      toast({
        title: 'Error when creating account',
        description: ErrorMessages.ONE_EMAIL_ONLY,
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Button
      variant="theme"
      _hover={{ bg: 'blackAlpha.600' }}
      isLoading={status === 'loading'}
      onClick={handleClick}
      leftIcon={<FaGithub />}
    >
      {newAccount ? 'Sign up with GitHub' : 'Sign in with GitHub'}
    </Button>
  );
};

export default LoginGithubButton;
