import { Button, useToast } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { firebaseApp } from '../../firebase';

const auth = getAuth(firebaseApp);

const LoginGithubButton = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error when creating account',
        description:
          'Note: only one account is allowed per email address! If the error persists, please contact us at xxx@gmail.com', // TODO add contact email,
        status: 'error',
        isClosable: true,
      });
    } else if (user) {
      navigate('/');
      toast({
        title: 'Successfully logged in!',
        status: 'success',
        isClosable: true,
      });
    }
  }, [loading]);

  return (
    <Button
      variant="theme"
      _hover={{ bg: 'blackAlpha.600' }}
      isLoading={loading}
      onClick={() => signInWithGithub()}
      leftIcon={<FaGithub />}
    >
      Sign in with Github
    </Button>
  );
};

export default LoginGithubButton;
