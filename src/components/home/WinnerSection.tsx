import { BoxProps, Center, Heading, Text } from '@chakra-ui/react';
import Section from 'components/common/Section';
import LeaderboardTeams from 'components/leaderboard/LeaderboardTeams';

const WinnerSection = (props: BoxProps) => {
  return (
    <Section heading="Theme Winners🎉" {...props}>
      <Text color="gray.400" fontSize="lg">
        Note: in no particular order!
      </Text>
      <Center maxW={'5xl'} width="full" mx="auto">
        <LeaderboardTeams />
      </Center>
      <Heading
        as="h4"
        fontSize="xl"
        mx="auto"
        mb={4}
        mt={6}
        color="gray.300"
        fontWeight={'normal'}
        width="80%"
        maxWidth="2xl"
      >
        Top 3 teams from each theme will be presenting <i>physically</i> on 16th July to compete for
        the top prize!
      </Heading>
    </Section>
  );
};

export default WinnerSection;
