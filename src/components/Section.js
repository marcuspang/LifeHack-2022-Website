import React from 'react';

import { Box, Text, Heading, Center } from '@chakra-ui/react';

function Section({ children, bg, heading, text }) {
  return (
    <Box h={400} bg={bg} p={10} textAlign="center">
      <Heading size={'2xl'}>{heading}</Heading>
      <Text>{text}</Text>
      {children}
    </Box>
  );
}

export default Section;
