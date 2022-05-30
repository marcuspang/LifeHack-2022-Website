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
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { firebaseApp } from '../../firebase';
import { FormData } from '../../pages/Register';
import LoginGithubButton from './LoginGithubButton';
import LoginGoogleButton from './LoginGoogleButton';

interface LoginFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const auth = getAuth(firebaseApp);

export const RegisterCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: 'onTouched',
  });
  const [createWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    {
      sendEmailVerification: true,
    }
  );
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (error) {
        toast({
          title: 'Error when creating account',
          description:
            'Note: only one account is allowed per email address! If the error persists, please contact us at xxx@gmail.com', // TODO add contact email,
          status: 'error',
          isClosable: true,
        });
      } else if (user) {
        navigate('/');
        toast({
          title: 'Successfully signed up!',
          status: 'success',
          isClosable: true,
        });
      }
    }
  }, [loading]);

  const onSubmit = async (values: FormData) => {
    await createWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign up for an account!</Heading>
        </Stack>
        <Box rounded="lg" bg="theme.400" boxShadow="lg" p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Stack spacing={4}>
                <FormControl isInvalid={!!errors.email} isRequired>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'This is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password} isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'This is required',
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          'Minimum 8 characters, at least 1 upper and lowercase letter, at least 1 number, and at least 1 special character',
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.confirmPassword} isRequired>
                  <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                  <Input
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                      required: 'This is required',
                      validate: (val: string) => {
                        if (watch('password') !== val) {
                          return 'Your passwords do not match!';
                        }
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </FormErrorMessage>
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
                  Register
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
