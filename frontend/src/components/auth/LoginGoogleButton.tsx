import { Button, useToast } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { firebaseApp } from '../../firebase';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);

const LoginGoogleButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  return (
    <Button
      variant="theme"
      _hover={{ bg: 'blackAlpha.600' }}
      isLoading={loading}
      onClick={() => signInWithGoogle()}
      leftIcon={<FcGoogle />}
    >
      Sign in with Google
    </Button>
  );
};

export default LoginGoogleButton;
