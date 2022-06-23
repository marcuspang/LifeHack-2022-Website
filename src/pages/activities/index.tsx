import { Box, Center, Heading } from '@chakra-ui/react';
import EditActivitiesContent from 'components/activities/EditActivitiesContent';

// Admin page to edit teams
const Activities = () => {
  return (
    <Center as="main" bg="black" py={12} flexDirection="column">
      <Heading as="h1" size="xl" display="inline" pb={10}>
        Activities
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
        <EditActivitiesContent />
      </Box>
    </Center>
  );
};

export default Activities;
