import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import React from 'react';

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => {
        loginWithRedirect({
          screen_hint: 'signup',
        });
      }}
      display={{ base: 'none', md: 'inline-flex' }}
      variant="themeBlue"
    >
      {'Sign Up'}
    </Button>
  );
};

export default RegisterButton;
