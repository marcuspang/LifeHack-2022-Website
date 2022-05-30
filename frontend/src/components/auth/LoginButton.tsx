import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate('/login');
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
      Sign In
    </Button>
  );
};

export default LoginButton;
