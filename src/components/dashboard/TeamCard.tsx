import { Box } from '@chakra-ui/react';
import TeamContent from './TeamContent';

const TeamCard = () => {
  return (
    <Box p={8} bg="gray.800" rounded="md" flexDirection="column" minWidth="5xl">
      <TeamContent />
    </Box>
  );
};

export default TeamCard;
