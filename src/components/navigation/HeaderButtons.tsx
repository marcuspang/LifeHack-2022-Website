import { Button, Stack } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import RegisterButton from '../auth/RegisterButton';
import Loader from '../common/Loader';

const HeaderButtons = () => {
  const router = useRouter();
  const { data, status } = useSession();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'unauthenticated' || !data) {
    return (
      <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
        <Button variant="themeBlue" onClick={() => router.push('/leaderboard')}>
          Leaderboard
        </Button>
        <RegisterButton />
        <LoginButton />
      </Stack>
    );
  }

  if (data.user.role === Role.ADMIN) {
    return (
      <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
        <Button variant="theme" onClick={() => router.push('/leaderboard')}>
          Leaderboard
        </Button>
        <Button variant="theme" onClick={() => router.push('/teams')}>
          Teams
        </Button>
        <LogoutButton />
      </Stack>
    );
  }

  return (
    <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
      <Button variant="themeBlue" onClick={() => router.push('/leaderboard')}>
        Leaderboard
      </Button>
      <Button variant="themeBlue" onClick={() => router.push('/team')}>
        Team
      </Button>
      <LogoutButton />
    </Stack>
  );
};

export default HeaderButtons;
