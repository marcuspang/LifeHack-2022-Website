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
    <Center bg="theme.100" display="flex"  h={700} p={4}>
      <Box boxSize="xl" pt={20} pr={5}>
        <Image src={femaleDevImg} alt="Idea" />
      </Box>
      <Box color="white" pl={5}>
        <Heading size={'4xl'}>Lifehack 2022</Heading>
        <Text fontSize={'2xl'}>9th - 10th July & 16th July 2022</Text>
        <Text fontSize={'xl'}>Stay ahead of change. Innovate the future.</Text>
        <Button fontSize="2xl" mt="2" colorScheme={"red"} size="lg">
          Register Now
        </Button>
      </Box>
    </Center>
  );
}

export default Header;
