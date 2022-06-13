import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl" color="teal.400">
        404
      </Heading>
      <Text fontWeight="600" fontSize="xl" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color="whiteAlpha.800" mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button colorScheme="teal" color="gray.50" variant="solid" onClick={() => router.back()}>
        Go Back
      </Button>
    </Box>
  );
};

export default NotFoundPage;
