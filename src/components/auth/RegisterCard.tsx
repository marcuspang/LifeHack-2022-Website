import { Box, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '../../pages/register';
import LoginGithubButton from './LoginGithubButton';
import LoginGoogleButton from './LoginGoogleButton';

interface LoginFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: 'onTouched',
  });
  const toast = useToast();
  const router = useRouter();

  // useEffect(() => {
  //   if (!loading) {
  //     if (error) {
  //       toast({
  //         title: 'Error when creating account',
  //description: ErrorMessages.ONE_EMAIL_ONLY,
  //         status: 'error',
  //         isClosable: true,
  //       });
  //     } else if (user) {
  //       navigate('/');
  //       toast({
  //         title: 'Successfully signed up!',
  //         status: 'success',
  //         isClosable: true,
  //       });
  //     }
  //   }
  // }, [loading]);

  const onSubmit = async (values: FormData) => {
    // await createWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign up for an account!</Heading>
        </Stack>
        <Box rounded="lg" bg="theme.400" boxShadow="lg" p={8}>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <Stack spacing={4}>
            {/* <Stack spacing={4}>
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
              </Stack> */}
            <Stack spacing={3}>
              <LoginGoogleButton newAccount />
              <LoginGithubButton newAccount />
            </Stack>
          </Stack>
          {/* </form> */}
        </Box>
      </Stack>
    </Flex>
  );
};
