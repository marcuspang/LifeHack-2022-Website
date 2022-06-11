import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" px={6} pt={3} pb={2} bg="theme.300" color="white">
      <Text fontSize="sm">© 2022 LifeHack. All rights reserved</Text>
    </Box>
  );
};

export default Footer;
