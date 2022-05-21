import femaleDevImg from '../images/female-dev.svg';
import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Hero = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Center bg="theme.100" p={4} flexDir={['column', 'column', 'row']}>
      <Image boxSize={['auto', 'auto', 'xl']} src={femaleDevImg} alt="Idea" />
      <Box pb={5}>
        <Heading as="h1" size="4xl">
          Lifehack 2022
        </Heading>
        <Text fontSize={['xl', '2xl']}>9th - 10th July &amp; 16th July 2022</Text>
        <Text fontSize={['lg', 'xl']}>Stay ahead of change. Innovate the future.</Text>
        <Button
          onClick={() => {
            loginWithRedirect({
              screen_hint: 'signup',
            });
          }}
          fontSize="xl"
          mt="2"
          colorScheme="red"
          size="lg"
        >
          Register Now
        </Button>
      </Box>
    </Center>
  );
};

export default Hero;
