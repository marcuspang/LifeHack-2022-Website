import { Box, Image, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" px={6} pt={3} pb={3} bg="theme.400">
      <Box width={['100%', '400px', '500px']} pb={8} pt={4}>
        <Image src="/nus-computing-logo.png" />
      </Box>
      <Text fontSize="sm">© 2022 LifeHack. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
