import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const RegisterButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push('/register');
      }}
      display={{ base: 'none', md: 'inline-flex' }}
      variant="cta"
    >
      Sign Up
    </Button>
  );
};

export default RegisterButton;
