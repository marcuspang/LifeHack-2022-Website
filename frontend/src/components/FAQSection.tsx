import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';

const FAQSection = () => {
  return (
    <Section bg="theme.200" heading="FAQ">
      <Box textAlign="left" maxW="700px" fontSize={['lg', 'lg', 'xl']} m="20px auto">
        <Box mt="10">
          <Heading size="md">Am I eligible to participate?</Heading>
          <Text>
            This event is open to all current Polytechnic, Junior College and ITE students, students
            awaiting entry to University, and all Undergraduate students.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">Do I need any technical experience or knowledge?</Heading>
          <Text>
            Some knowledge of programming is recommended but not necessary! We have workshops
            planned for you from 4 - 8 July. Attending the workshops will provide you with resources
            and ideas to help you conceptualize and create your hack.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">I don&apos;t have a team member. Can I still participate?</Heading>
          <Text>
            Each team should have 2 - 4 members. You may email us at lifehack@nuscomputing.com and
            we can try to match you up with someone.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">Will LifeHack 2022 be online or in-person?</Heading>
          <Text>
            LifeHack 2022 will be a hybrid event. The main hackathon event from 4 - 10 July will be
            conducted online while the finale on 16 July will be a physical event.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">
            What&apos;s next after our submission of the registration form?
          </Heading>
          <Text>
            Your registration will be reviewed by our team soon. Upon reviewing all applications, we
            will notify you by email of the outcome of your registration.
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md">
            Which platform will be used to disseminate event updates/announcements?
          </Heading>
          <Text>
            We will have a Discord server for participants to join and be updated of workshops or
            mini events throughout the hackathon.
          </Text>
          <Box mt="10">
            <Heading size="md">Can I use code that I previously wrote?</Heading>
            <Text>
              You are allowed to use snippets of code you have previously written. However, copying
              your entire hack from previous events or from online is strictly not allowed.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="md">How will the submissions be assessed?</Heading>
            <Text>
              Details on judging criteria and rules will be elaborated upon on the event Opening Day
              (9 July). Judging panels will consist of NUS professors and industry professionals.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="md">
              Are there any restrictions on platforms and programming languages which can be used?
            </Heading>
            <Text>
              No. Feel free to use any programming language or technology you&apos;re comfortable
              with!
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="md">Any other questions?</Heading>
            <Text>
              Let us know at
              <Link color="yellow.200" to="mailto:lifehack@nuscomputing.com">
                lifehack@nuscomputing.com!
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default FAQSection;
