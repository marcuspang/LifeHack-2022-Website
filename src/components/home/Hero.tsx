import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Hero = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <Center bg="black" p={8} flexDir={['column', 'column', 'row']}>
      <Image boxSize={['auto', 'auto', 'lg']} src="/lifehack.svg" alt="Idea" />
      <Box pb={5}>
        <Heading as="h1" size="4xl">
          Lifehack 2022
        </Heading>
        <Text fontSize={['xl', '2xl']}>9th - 10th July & 16th July 2022</Text>
        <Text fontSize={['lg', 'xl']}>Stay ahead of change. Innovate the future.</Text>
        <Button
          onClick={() => {
            router.push('/register');
          }}
          isLoading={status === 'loading'}
          fontSize="xl"
          mt={4}
          colorScheme="blue"
          size="lg"
        >
          Register Now
        </Button>
      </Box>
    </Center>
  );
};

export default Hero;
