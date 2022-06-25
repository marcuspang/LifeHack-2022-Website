import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const LoginButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.push('/login');
      }}
      isActive={router.route === '/login'}
      variant="header"
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
