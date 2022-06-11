import { Box } from '@chakra-ui/react';
import TeamContent from './TeamContent';

const TeamCard = () => {
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
      <TeamContent />
    </Box>
  );
};

export default TeamCard;
