import { Box, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoginGithubButton from './LoginGithubButton';
import LoginGoogleButton from './LoginGoogleButton';

export const LoginCard = () => {
  const { data, status } = useSession();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors, isSubmitting },
  // } = useForm<FormData>();
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
  }, [status]);

  // const onSubmit = async (values: FormData) => {
  //   signIn('credentials');
  // };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account!</Heading>
        </Stack>
        <Box rounded="lg" bg="theme.400" boxShadow="lg" p={8}>
          <Stack spacing={4}>
            {/* <Stack spacing={4}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
              </Stack> */}
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
