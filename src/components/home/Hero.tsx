import { Box, Button, Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Hero = () => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <Center bg="black" p={12} flexDir={['column', 'column', 'row']}>
      <Image boxSize={['auto', 'auto', 'lg']} src="/lifehack.svg" alt="Idea" />
      <Stack py={5} pl={2} spacing={1}>
        <Heading as="h1" size={['2xl', '4xl', '4xl']} textAlign={['center', 'center', 'inherit']}>
          Lifehack 2022
        </Heading>
        <Box>
          <Text fontSize={['lg', 'xl', '2xl']} textAlign={['center', 'center', 'inherit']}>
            9th - 10th July & 16th July 2022
          </Text>
          <Text fontSize={['md', 'lg', 'xl']} textAlign={['center', 'center', 'inherit']}>
            Stay ahead of change. Innovate the future.
          </Text>
        </Box>
        <Flex justifyContent={['center', 'center', 'inherit']}>
          {status !== 'authenticated' && (
            <Button
              onClick={() => {
                router.push('/register');
              }}
              isLoading={status === 'loading'}
              fontSize={['lg', 'xl', 'xl']}
              mt={3}
              colorScheme="blue"
              size="lg"
            >
              Register Now
            </Button>
          )}
        </Flex>
      </Stack>
    </Center>
  );
};

export default Hero;
