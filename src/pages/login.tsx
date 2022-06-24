import { useToast } from '@chakra-ui/react';
import { LoginCard } from 'components/auth/LoginCard';
import { ErrorMessages } from 'constants/errors';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
  const router = useRouter();
  const { error } = router.query;
  const toast = useToast();

  useEffect(() => {
    if (error) {
      if (error === 'OAuthAccountNotLinked') {
        toast({
          status: 'error',
          title: 'Error signing in',
          description: ErrorMessages.ONE_EMAIL_ONLY,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error signing in',
          description: error,
          isClosable: true,
        });
      }
    }
  }, [error, toast]);

  return <LoginCard />;
};

export default Login;
