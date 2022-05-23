import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import HeaderButtons from './HeaderButtons';
import Loader from './Loader';

const Header = () => {
  const { isLoading } = useAuth0();
  return (
    <Box as="header" bg="theme.400" px={6}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading fontSize="md">LifeHack 2022</Heading>
        {isLoading ? <Loader /> : <HeaderButtons />}
      </Flex>
    </Box>
  );
};

export default Header;
