import { Heading, Center, Text } from '@chakra-ui/react';
import React from 'react';
import Section from './Section';

const AboutSection = () => {
  return (
    <Section bg="theme.300" heading="About">
      <Text m="0 auto" maxW="800px" fontSize={['lg', '2xl']}>
        Lifehack 2022 is a hackathon aimed to channel the creativity, drive, and skills of the
        participants in the software development field. Participants are expected to develop
        intelligent solutions in response to the problem statements presented during the
        competition. The event is mostly held online, with the exception of the closing day.
      </Text>
      <Heading size="lg" mt={[10, 20]}>
        There will be 3 themes for participants to choose from:
      </Heading>
      <Center flexDir={['column', 'column', 'row']} my={[5, 10]}>
        <Heading color="pink.300">Giving Back</Heading>
        <Heading px="10" color="green.300">
          Environment
        </Heading>
        <Heading color="yellow.300">Safety</Heading>
      </Center>
    </Section>
  );
};

export default AboutSection;
