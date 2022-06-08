import { Button } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import React from 'react';

const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        signOut();
      }}
      variant="theme"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
