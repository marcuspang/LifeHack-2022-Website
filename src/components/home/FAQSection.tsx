import { Box, Heading, Link, Text } from '@chakra-ui/react';
import Section from 'components/common/Section';
import NextLink from 'next/link';

const FAQSection = () => {
  return (
    <Section bg="theme.400" heading="FAQ">
      <Box textAlign="left" maxW="700px" fontSize={['lg', 'lg', 'xl']} m="20px auto" px={6}>
        <Box mt="10">
          <Heading size="md">Am I eligible to participate?</Heading>
          <Text>
            This event is open to all current Polytechnic, Junior College, ITE students, students
            awaiting entry to University, and all Undergraduate students.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">Do I need any technical experience or knowledge?</Heading>
          <Text>
            Some programming knowledge is recommended but not necessary! We have workshops planned
            for you from 4th - 8th July. Attending these workshops will provide you with resources
            and ideas that will help you conceptualize and create your hack.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">I don&apos;t have a team member. Can I still participate?</Heading>
          <Text>
            Each team should have 2 - 4 members. You may email us at{' '}
            <NextLink href="mailto:lifehack@nuscomputing.com" passHref>
              <Link color="yellow.200">lifehack@nuscomputing.com</Link>
            </NextLink>{' '}
            and we can try to match you up with someone.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">Will LifeHack 2022 be online or in-person?</Heading>
          <Text>
            LifeHack 2022 will be a hybrid event. The main hackathon event from 4th - 10th July will
            be conducted online, while the finale on 16th July will be a physical event.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">What&apos;s next after submitting the registration form?</Heading>
          <Text>
            Your registration will then be reviewed by our team shortly. Upon reviewing all
            applications, we will notify you by email of the outcome of your registration.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">
            Which platform will be used to disseminate event updates/announcements?
          </Heading>
          <Text>
            We will have a Discord server for you to join and be notified of workshops or mini
            events throughout the hackathon.
          </Text>
          <Box mt="10">
            <Heading size="md">Can I use code that I previously wrote?</Heading>
            <Text>
              You are allowed to use snippets of code you have previously written. However, copying
              your entire hack from previous events or from other online sources is strictly not
              allowed.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="md">How will the submissions be assessed?</Heading>
            <Text>
              Details on judging criteria and rules will be elaborated upon on the event Opening Day
              (9th July). Judging panels will consist of NUS professors and industry professionals.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="md">
              Are there any restrictions on platforms or programming languages?
            </Heading>
            <Text>
              Nope! Feel free to use any programming language or technology you&apos;re comfortable
              with.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="md">Any other questions?</Heading>
            <Text>
              Let us know at{' '}
              <NextLink href="mailto:lifehack@nuscomputing.com" passHref>
                <Link color="yellow.200">lifehack@nuscomputing.com</Link>
              </NextLink>
              !
            </Text>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default FAQSection;
