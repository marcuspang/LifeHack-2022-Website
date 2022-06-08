import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const LoginButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push('/login');
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
