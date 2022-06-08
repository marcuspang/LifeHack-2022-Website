import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const RegisterButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push('/register');
      }}
      display={{ base: 'none', md: 'inline-flex' }}
      variant="themeBlue"
    >
      Sign Up
    </Button>
  );
};

export default RegisterButton;
