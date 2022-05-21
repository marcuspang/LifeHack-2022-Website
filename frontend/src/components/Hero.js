import femaleDevImg from '../images/female-dev.svg';
import { Box, Button, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Center bg="theme.100" p={4} flexDir={['column', 'column', 'row']}>
      <Image boxSize={['auto', 'auto', 'xl']} src={femaleDevImg} alt="Idea" />
      <Box pb={5}>
        <Heading as='h1' size={'4xl'}>Lifehack 2022</Heading>
        <Text fontSize={['xl', '2xl']}>9th - 10th July & 16th July 2022</Text>
        <Text fontSize={['lg', 'xl']}>Stay ahead of change. Innovate the future.</Text>
        <Button as={'a'} href="/register" fontSize="xl" mt="2" colorScheme={'red'} size="lg">
          Register Now
        </Button>
      </Box>
    </Center>
  );
};

export default Hero;
