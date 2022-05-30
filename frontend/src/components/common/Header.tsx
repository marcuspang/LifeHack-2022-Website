import { Box, Flex, Heading } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseApp } from '../../firebase';
import HeaderButtons from '../navigation/HeaderButtons';
import Loader from './Loader';

const auth = getAuth(firebaseApp);

const Header = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <Box as="header" bg="theme.400" px={6}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading fontSize="md">LifeHack 2022</Heading>
        {loading ? <Loader /> : <HeaderButtons />}
      </Flex>
    </Box>
  );
};

export default Header;
