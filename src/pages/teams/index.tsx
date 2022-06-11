import { Box, Center, Heading } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import EditTeamsTable from '../../components/teams/EditTeamsTable';

// Admin page to edit teams
const Teams = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && data.user.role !== Role.ADMIN) {
      router.push('/');
    }

    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  return (
    <Center as="main" bg="black" py={12} flexDirection="column">
      <Heading as="h1" size="xl" display="inline" pb={10}>
        Edit Teams
      </Heading>
      <Box
        p={8}
        pt={12}
        bg="gray.800"
        rounded="md"
        flexDirection="column"
        maxW="80%"
        m="0 auto"
        width={'100%'}
      >
        <EditTeamsTable />
      </Box>
    </Center>
  );
};

export default Teams;
