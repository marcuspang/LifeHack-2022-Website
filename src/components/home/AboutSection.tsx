import { Heading, Stack, Text } from '@chakra-ui/react';
import Section from 'components/common/Section';

const AboutSection = () => {
  return (
    <Section bg="theme.400" heading="About">
      <Text m="0 auto" maxW="800px" fontSize={['md', 'lg', '2xl']} px={6}>
        LifeHack 2022 is a hackathon aimed to channel the creativity, drive, and skills of the
        participants in the software development field. Participants are expected to develop
        intelligent solutions in response to the problem statements presented during the
        competition. The event is mostly held online, with the exception of the closing day.
      </Text>
      <Heading size="lg" mt={[10, 20]}>
        There will be 3 themes for participants to choose from:
      </Heading>
      <Stack
        direction={['column', 'column', 'row']}
        my={[5, 5, 10]}
        spacing={6}
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="pink.300" mt={1}>
          Giving Back
        </Heading>
        <Heading color="green.300">Environment</Heading>
        <Heading color="yellow.300">Safety</Heading>
      </Stack>
    </Section>
  );
};

export default AboutSection;
