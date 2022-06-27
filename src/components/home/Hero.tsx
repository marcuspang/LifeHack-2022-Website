import { Box, Button, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

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
          {/* <NextLink href="https://nus.campuslabs.com/engage/submitter/form/start/545156" passHref> */}
          <Button
            // as={Link}
            // target="_blank"
            // rel="noopener noreferrer"
            p={6}
            variant="cta"
            fontSize={['lg', 'xl', 'xl']}
            mt={3}
            disabled
            size="lg"
            width="270px"
          >
            Registrations have closed!
          </Button>
          {/* </NextLink> */}
          {/* <Text as="span" color="gray.600" mt={2}>
            Deadline: 27th June!
          </Text> */}
        </Flex>
      </Stack>
    </Center>
  );
};

export default Hero;
