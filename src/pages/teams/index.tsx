import { Box, Center, Heading } from '@chakra-ui/react';
import EditTeamsTable from 'components/teams/EditTeamsTable';

const Teams = () => {
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
        width="100%"
      >
        <EditTeamsTable />
      </Box>
    </Center>
  );
};

export default Teams;
