import { useAuth0 } from '@auth0/auth0-react';
import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';

const HeaderButtons = () => {
  const { isAuthenticated, user } = useAuth0();

  return !isAuthenticated ? (
    <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
      <RegisterButton />
      <LoginButton />
    </Stack>
  ) : (
    <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
      <Button variant={'themeBlue'}>Leaderboard</Button>
      <Button variant="themeBlue">Settings</Button>
      <LogoutButton />
    </Stack>
  );
};

export default HeaderButtons;
