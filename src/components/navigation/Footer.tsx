import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box as="footer" px={6} pt={3} pb={3} bg="theme.400">
      <Box pb={8} pt={4}>
        <Image
          width={'575px'}
          height="100px"
          src="/nus-computing-logo.png"
          alt="NUS Computing Logo"
        />
      </Box>
      <Text fontSize="sm">© 2022 LifeHack. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
