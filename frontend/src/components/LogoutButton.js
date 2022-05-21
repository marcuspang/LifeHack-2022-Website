import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import React from 'react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => {
        logout();
      }}
      fontSize="sm"
      fontWeight={400}
      bg="theme.500"
      _hover={{ bg: 'theme.400' }}
      _active={{
        bg: 'theme.400',
      }}
      color="white"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
