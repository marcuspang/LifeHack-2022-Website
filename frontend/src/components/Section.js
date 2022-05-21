import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Section = ({ children, bg, heading, text }) => {
  return (
    <Box minH={400} bg={bg} p={4} textAlign="center">
      <Heading my={5} size="2xl">
        {heading}
      </Heading>
      <Text>{text}</Text>
      {children}
    </Box>
  );
};

export default Section;
