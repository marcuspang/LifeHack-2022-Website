import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { firebaseApp } from '../../firebase';
import { FormData } from '../../pages/Register';
import LoginGithubButton from './LoginGithubButton';
import LoginGoogleButton from './LoginGoogleButton';

const auth = getAuth(firebaseApp);

export const LoginCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast({
          title: 'Error when signing in',
          description: 'Please try again! If the error persists, contact us at xxx@gmail.com', // TODO add contact email,
          status: 'error',
          isClosable: true,
        });
      } else if (user) {
        navigate('/');
        toast({
          title: 'Successfully logged in!',
          status: 'success',
          isClosable: true,
        });
      }
    }
  }, [loading]);

  const onSubmit = async (values: FormData) => {
    await signInWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account!</Heading>
        </Stack>
        <Box rounded="lg" bg="theme.400" boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Stack spacing={4}>
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
              </Stack>
              <Stack spacing={3}>
                <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="flex-end">
                  {/* <Link color="blue.400">Forgot password?</Link> */}
                </Stack>
                <Button
                  variant="theme"
                  _hover={{ bg: 'blackAlpha.600' }}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Log In
                </Button>
                <LoginGoogleButton />
                <LoginGithubButton />
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
