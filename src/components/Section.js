import React from 'react';

import { Box, Text, Heading, Center } from '@chakra-ui/react';

function Section({heading, text}) {
  return (
    <Center p={4}>
      <Box textAlign="center">
        <Heading size={'2xl'}>{heading}</Heading>
        <Text>{text}</Text>
      </Box>
    </Center>
  );
}

export default Section;
