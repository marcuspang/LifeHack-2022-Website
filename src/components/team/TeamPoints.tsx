import { Heading, Stack, Text } from '@chakra-ui/react';

interface TeamPointsProps {
  points: number;
}

const TeamPoints = ({ points }: TeamPointsProps) => {
  return (
    <Stack pt={6}>
      <Heading as="h3" size="md" display="inline">
        Total Points
      </Heading>
      <Text fontSize="xl">{points}</Text>
    </Stack>
  );
};

export default TeamPoints;
