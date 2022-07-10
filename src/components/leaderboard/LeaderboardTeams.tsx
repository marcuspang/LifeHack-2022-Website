import { Heading, HeadingProps, Stack, Text } from '@chakra-ui/react';

interface ThemeWinnerData {
  theme: string;
  color: HeadingProps['color'];
  topTeams: { name: string }[];
  honourableMentions: { name: string }[];
}

const themeWinnersData: ThemeWinnerData[] = [
  {
    theme: 'Giving Back',
    color: 'pink.300',
    topTeams: [{ name: 'Goose' }, { name: 'JCKZ' }, { name: 'notsus hacksthon' }],
    honourableMentions: [{ name: 'InfinityCoders' }, { name: 'Senna' }],
  },
  {
    theme: 'Environment',
    color: 'green.300',
    topTeams: [{ name: 'git reset life - hard' }, { name: 'Orchid' }, { name: 'One Wolves' }],
    honourableMentions: [{ name: 'Cabbage' }, { name: 'The Deck Club' }],
  },
  {
    theme: 'Safety',
    color: 'yellow.300',
    topTeams: [{ name: 'Quest Busters' }, { name: '3 Tekong Boys' }, { name: 'Team Cow' }],
    honourableMentions: [{ name: 'PR BROS' }, { name: 'void painAndSuffering()' }],
  },
];

const LeaderboardTeams = () => {
  return (
    <Stack
      direction={['column', 'column', 'row', 'row']}
      mb={4}
      spacing={0}
      justifyContent="space-between"
      alignItems={'flex-start'}
    >
      {themeWinnersData.map((themeWinners) => (
        <Stack key={themeWinners.theme} py={4} px={8} flexDirection="column" alignItems="center">
          <Heading as="h3" fontSize={'3xl'} color={themeWinners.color} mt={1}>
            {themeWinners.theme}
          </Heading>
          <Heading as="h4" fontSize="2xl" pt={4}>
            Top 3
          </Heading>
          <Stack textAlign={'center'}>
            {themeWinners.topTeams.map((team) => (
              <Text key={team.name} fontSize={'xl'} as="span">
                {team.name}
              </Text>
            ))}
          </Stack>
          <Heading as="h4" fontSize="2xl" pt={4}>
            Honorouble Mentions
          </Heading>
          <Stack textAlign={'center'}>
            {themeWinners.honourableMentions.map((team) => (
              <Text key={team.name} fontSize={'xl'} as="span">
                {team.name}
              </Text>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default LeaderboardTeams;
