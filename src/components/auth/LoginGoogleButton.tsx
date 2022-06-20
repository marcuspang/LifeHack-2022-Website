import { Button, useToast } from '@chakra-ui/react';
import { ErrorMessages } from 'constants/errors';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const LoginGoogleButton = ({ newAccount }: { newAccount?: boolean }) => {
  const { status } = useSession();
  const toast = useToast();

  const handleClick = async () => {
    try {
      await signIn('google');
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
      leftIcon={<FcGoogle />}
    >
      {newAccount ? 'Sign up with Google' : 'Sign in with Google'}
    </Button>
  );
};

export default LoginGoogleButton;
