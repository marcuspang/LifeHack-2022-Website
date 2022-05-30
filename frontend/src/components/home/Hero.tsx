import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);

const Hero = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <Center bg="black" p={4} flexDir={['column', 'column', 'row']}>
      <Image boxSize={['auto', 'auto', 'xl']} src="/logo.png" alt="Idea" />
      <Box pb={5}>
        <Heading as="h1" size="4xl">
          Lifehack 2022
        </Heading>
        <Text fontSize={['xl', '2xl']}>9th - 10th July & 16th July 2022</Text>
        <Text fontSize={['lg', 'xl']}>Stay ahead of change. Innovate the future.</Text>
        {!user && (
          <Button
            onClick={() => {
              navigate('/register');
            }}
            isLoading={loading}
            fontSize="xl"
            mt="2"
            bg="theme.100"
            colorScheme="blue"
            size="lg"
          >
            Register Now
          </Button>
        )}
      </Box>
    </Center>
  );
};

export default Hero;
