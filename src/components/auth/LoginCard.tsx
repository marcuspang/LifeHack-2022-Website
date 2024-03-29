import { Box, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginGithubButton from './LoginGithubButton';
import LoginGoogleButton from './LoginGoogleButton';

export const LoginCard = () => {
  const { status } = useSession();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
      toast({
        title: 'Successfully logged in!',
        status: 'success',
        isClosable: true,
      });
      return;
    }
  }, [status, router, toast]);

  return (
    <Flex align="center" justify="center" height={'60vh'} minH="400px">
      <Stack spacing={8} mx="auto" maxW="lg" px={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign={'center'}>
            Sign in to your account!
          </Heading>
        </Stack>
        <Box rounded="lg" bg="theme.400" boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <Stack spacing={3}>
              <LoginGoogleButton />
              <LoginGithubButton />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
