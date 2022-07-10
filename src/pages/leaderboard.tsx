import { Box, Center, Heading } from '@chakra-ui/react';
import WinnerSection from 'components/home/WinnerSection';
import LeaderboardTable from 'components/leaderboard/LeaderboardTable';

const Leaderboard = () => {
  return (
    <Center as="main" pt={0} pb={12} flexDirection="column" mx="auto">
      <WinnerSection />
      <Heading as="h1" size="xl" display="inline" pb={10}>
        Points Leaderboard
      </Heading>
      <Box
        p={8}
        bg="gray.800"
        rounded="md"
        flexDirection="column"
        m="0 auto"
        maxW="4xl"
        width="100%"
      >
        <LeaderboardTable />
      </Box>
    </Center>
  );
};

export default Leaderboard;
