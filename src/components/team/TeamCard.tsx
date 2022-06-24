import { Box } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import TeamContent, { TeamInterface } from './TeamContent';

interface UserTeamInterface {
  role: Role;
  team: TeamInterface;
}

const TeamCard = () => {
  const { status } = useSession();
  const { data, isValidating } = useSWR<UserTeamInterface>('/api/user');
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/');
    return <Loader />;
  }

  if (status === 'loading' || isValidating) {
    return <Loader />;
  }

  return (
    <Box
      p={8}
      pt={12}
      bg="gray.800"
      rounded="md"
      flexDirection="column"
      maxW="80%"
      m="0 auto"
      width="100%"
    >
      <TeamContent data={data?.team} />
    </Box>
  );
};

export default TeamCard;
