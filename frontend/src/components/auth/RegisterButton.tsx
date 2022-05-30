import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate('/register');
      }}
      display={{ base: 'none', md: 'inline-flex' }}
      variant="themeBlue"
    >
      Sign Up
    </Button>
  );
};

export default RegisterButton;
