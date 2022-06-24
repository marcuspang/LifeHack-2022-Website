import { Box, Button, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

const Hero = () => {
  return (
    <Center bg="black" p={12} flexDir={['column', 'column', 'row']} minH="500px">
      <Box boxSize={['xs', 'sm', 'md', 'lg']} position="relative">
        <Image
          layout="fill"
          objectFit="contain"
          src="/logo.png"
          alt="LifeHack 2022 Logo"
          priority
        />
      </Box>
      <Stack py={5} pl={[0, 8, 8]} spacing={1} textAlign="left">
        <Heading
          as="h1"
          size={['2xl', '3xl', '4xl']}
          textAlign={['center', 'center', 'inherit', 'inherit']}
        >
          LifeHack 2022
        </Heading>
        <Box>
          <Text
            fontSize={['lg', 'xl', '2xl']}
            textAlign={['center', 'center', 'inherit', 'inherit']}
          >
            9th - 10th July & 16th July 2022
          </Text>
          <Text
            fontSize={['md', 'lg', 'xl']}
            textAlign={['center', 'center', 'inherit', 'inherit']}
          >
            Stay ahead of change. Innovate the future.
          </Text>
        </Box>
        <Flex alignItems={['center', 'center', 'inherit', 'inherit']} direction="column">
          <NextLink href="https://nus.campuslabs.com/engage/submitter/form/start/545156" passHref>
            <Button
              as={Link}
              target="_blank"
              rel="noopener noreferrer"
              p={6}
              variant="cta"
              fontSize={['lg', 'xl', 'xl']}
              mt={3}
              colorScheme="blue"
              size="lg"
              width="200px"
            >
              Register Now
            </Button>
          </NextLink>
          <Text as="span" color="gray.400" mt={2}>
            Deadline: 27th June!
          </Text>
        </Flex>
      </Stack>
    </Center>
  );
};

export default Hero;
