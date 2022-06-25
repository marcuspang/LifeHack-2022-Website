import { Box, Center, Heading } from '@chakra-ui/react';
import LeaderboardTable from 'components/leaderboard/LeaderboardTable';

const Leaderboard = () => {
  return (
    <Center as="main" py={12} flexDirection="column" maxW="4xl" mx="auto">
      <Heading as="h1" size="xl" display="inline" pb={10}>
        Leaderboard
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
        <LeaderboardTable />
      </Box>
    </Center>
  );
};

export default Leaderboard;
