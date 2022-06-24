import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box as="footer" px={6} pt={[7, 10, 10]} pb={3} bg="theme.400">
      <Box
        position="relative"
        maxW={['287.5px', '345px', '431.25px', '575px']}
        height={['50px', '60px', '75px', '100px']}
        mb={4}
      >
        <Image
          objectFit="contain"
          layout="fill"
          src="/nus-computing-logo.png"
          alt="NUS Computing Logo"
        />
      </Box>
      <Text fontSize="sm" pt={[7, 10, 10]}>
        © 2022 LifeHack. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
