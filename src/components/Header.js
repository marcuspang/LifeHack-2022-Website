import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Heading,
  Center,
  Button,
  Image,
} from '@chakra-ui/react';

import femaleDevImg from '../images/female-dev.svg';

function Header() {
  return (
    <Center bg="theme.500" display="flex"  h={500} p={4}>
      <Box boxSize="sm" pr={5}>
        <Image src={femaleDevImg} alt="Dan Abramov" />
      </Box>
      <Box color="white" pl={5}>
        <Heading size={'4xl'}>Lifehack 2022</Heading>
        <Text fontSize={'2xl'}>23-25 July 2022</Text>
        <Text fontSize={'xl'}>Best Hackathon Ever</Text>
        <Button mt="2" bg="theme.100" size="lg">
          Register Now
        </Button>
      </Box>
    </Center>
  );
}

export default Header;
