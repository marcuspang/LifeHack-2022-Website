import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  const router = useRouter();
  return (
    <Box as="header" bg="theme.400" px={6}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading fontSize="lg " cursor="pointer" onClick={() => router.push('/')}>
          LifeHack 2022
        </Heading>
        <HeaderButtons />
      </Flex>
    </Box>
  );
};

export default Header;
