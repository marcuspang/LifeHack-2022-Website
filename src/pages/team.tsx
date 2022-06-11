import { Center, Heading } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TeamCard from '../components/team/TeamCard';

const Team = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  if (status !== 'authenticated') {
    return;
  }

  return (
    <Center as="main" bg="black" py={12} flexDir="column">
      <Heading pb={10} as="h1">
        {'Welcome back, ' + data?.user?.name + '!'}
      </Heading>
      <TeamCard />
    </Center>
  );
};

export default Team;
