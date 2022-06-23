import { Box, Center } from '@chakra-ui/react';
import EditTeamCard from 'components/team/EditTeamCard';
import { useRouter } from 'next/router';

const EditTeam = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Center as="main" bg="black" py={12} flexDir="column">
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
        <EditTeamCard teamId={id?.toString()} />
      </Box>
    </Center>
  );
};

export default EditTeam;
