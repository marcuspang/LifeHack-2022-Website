import { Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseApp } from '../../firebase';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import RegisterButton from '../auth/RegisterButton';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(firebaseApp);

const HeaderButtons = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  if (!user) {
    return (
      <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
        <RegisterButton />
        <LoginButton />
      </Stack>
    );
  }

  return (
    <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
      <Button variant="themeBlue" onClick={() => navigate('/leaderboard')}>
        Leaderboard
      </Button>
      <Button variant="themeBlue">Settings</Button>
      <LogoutButton />
    </Stack>
  );
};

export default HeaderButtons;
