import { Center, Heading } from '@chakra-ui/react';
import TeamCard from 'components/team/TeamCard';
import { useSession } from 'next-auth/react';

const Team = () => {
  const { data } = useSession();

  return (
    <Center as="main" bg="black" py={12} flexDir="column">
      <Heading pb={10} as="h1" textAlign={'center'}>
        {data?.user.name ? 'Welcome back, ' + data?.user?.name + '!' : 'No team found'}
      </Heading>
      <TeamCard />
    </Center>
  );
};

export default Team;
