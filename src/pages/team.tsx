import { Center, Heading } from '@chakra-ui/react';
import TeamCard from 'components/team/TeamCard';

const Team = () => {
  return (
    <Center as="main" bg="black" py={12} flexDir="column">
      <Heading pb={10} as="h1" textAlign={'center'}>
        Your Team
      </Heading>
      <TeamCard />
    </Center>
  );
};

export default Team;
