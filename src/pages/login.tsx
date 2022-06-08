import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ErrorMessages } from '../../constants/errors';
import { LoginCard } from '../components/auth/LoginCard';

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
        });
      } else {
        toast({
          status: 'error',
          title: 'Error signing in',
          description: error,
        });
      }
    }
  }, [error]);

  return <LoginCard></LoginCard>;
};

export default Login;
