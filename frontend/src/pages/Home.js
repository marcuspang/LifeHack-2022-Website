import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Section bg="theme.500" heading="About">
        <Text m="0 auto" w="70%" pt={3} fontSize="2xl">
          LifeHack 2021 is a 24-Hour virtual hackathon that wants you to develop innovative software
          solutions to make a positive change in people&apos; s lives in a post-COVID world. Through
          exciting workshops and events, you will have the chance to learn various technologies from
          web development to utilizing cloud services.
        </Text>
        <Heading size="lg" mt="20">
          There will be 3 themes for participants to choose from:
        </Heading>
        <Center my="10">
          <Heading color="theme.100">Giving Back</Heading>
          <Heading px="10" color="green.300">
            Environment
          </Heading>
          <Heading color="yellow.300">Safety</Heading>
        </Center>
      </Section>
      <Section bg="theme.200" heading="Timeline">
        <Box maxW="75%" m="0 auto">
          <SimpleGrid mt="20" columns={2} spacing={10}>
            <VStack
              divider={<StackDivider borderColor="gray.400" />}
              spacing={4}
              align="flex-start"
            >
              <Heading size="md">Day 1: Opening Day (9th July)</Heading>
              <Flex>
                <Text mr="5">0900 - 1000</Text>
                <Text>Opening Ceremony</Text>
              </Flex>
              <Flex>
                <Text mr="5">1000 - 1100</Text>
                <Text>Panel Discussion</Text>
              </Flex>

              <Flex>
                <Text mr="5">1100 - 1200</Text>
                <Text>Sponsorship Talks</Text>
              </Flex>
              <Flex>
                <Text mr="5">1200</Text>
                <Box w="55px"></Box>
                <Text>Hacking Begins!</Text>
              </Flex>
              <Flex>
                <Text mr="5">1200 -</Text>
                <Box w="43px"></Box>
                <Text>Discord Q&A with Industry Experts</Text>
              </Flex>
              <Flex>
                <Text mr="5">2030 - 2145</Text>
                <Text>Games</Text>
              </Flex>
            </VStack>
            <VStack
              divider={<StackDivider borderColor="gray.400" />}
              spacing={4}
              align="flex-start"
            >
              <Heading size="md">Day 2: Submission Day (10th July)</Heading>
              <Flex>
                <Text mr="5">1200</Text>
                <Box w="55px"></Box>
                <Text>Submission Deadline</Text>
              </Flex>

              <Flex>
                <Text mr="5">1200 - 1800</Text>
                <Text>Judging</Text>
              </Flex>
              <Flex>
                <Text mr="5">2000</Text>
                <Box w="55px"></Box>
                <Text>Announcements of top projects and special prize winners</Text>
              </Flex>
            </VStack>
          </SimpleGrid>
          <Box>
            <VStack
              divider={<StackDivider borderColor="gray.400" />}
              spacing={4}
              align="flex-start"
              mt="20"
            >
              <Heading size="md">Day 3: Finale Day (16th July)</Heading>
              <Flex>
                <Text mr="5">1000 - 1015</Text>
                <Text>Opening Address</Text>
              </Flex>

              <Flex>
                <Text mr="5">1030 - 1115</Text>
                <Text>Presentation by Top 3 Teams from Giving Back Theme</Text>
              </Flex>
              <Flex>
                <Text mr="5">1115 - 1200</Text>
                <Text>Presentation by Top 3 Teams from Environment Theme</Text>
              </Flex>
              <Flex>
                <Text mr="5">1200 - 1245</Text>
                <Text>Presentation by Top 3 Teams from Safety Back Theme</Text>
              </Flex>
              <Flex>
                <Text mr="5">1245 - 1430</Text>
                <Text>Lunch</Text>
              </Flex>
              <Flex>
                <Text mr="5">1430 - 1450</Text>
                <Text>Trivia Quiz</Text>
              </Flex>
              <Flex>
                <Text mr="5">1450 - 1505</Text>
                <Text>Lucky Draw</Text>
              </Flex>
              <Flex>
                <Text mr="5">1510 - 1530</Text>
                <Text>Prize Presentation by Computing Club President</Text>
              </Flex>
              <Flex>
                <Text mr="5">1530 - 1630</Text>
                <Text>Closing Ceremony</Text>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Section>
      <Section heading="Prizes">
        <Text fontSize="3xl" mt="10">
          Main Prizes
        </Text>
        <Text fontSize="xl">(For each category)</Text>
        <Center>
          <Box pt="10" mt="10" w="200px">
            <Heading size="lg" color="yellow.300">
              $600 & $400
            </Heading>
            <Heading size="lg">2nd and 3rd</Heading>
          </Box>
          <Box mx="20" mt="10" w="200px">
            <Heading size="2xl" color="yellow.300">
              $1000
            </Heading>
            <Heading size="xl">1st</Heading>
          </Box>
          <Box pt="20" mt="10" w="200px">
            <Heading size="lg" color="yellow.300">
              $150
            </Heading>
            <Heading size="lg">4th and 5th</Heading>
          </Box>
        </Center>
        <Text fontSize="3xl" mt="20">
          Special Prizes
        </Text>
        <Box fontSize="xl" mt="8">
          <Text>Most Boomer Friendly</Text>
          <Text color="yellow.300">$250</Text>
          <Text mt="5">Most Unorthodox Hack</Text>
          <Text color="yellow.300">$300</Text>
          <Text mt="5">Best Pre-U Hack</Text>
          <Text color="yellow.300">$350</Text>
          <Text mt="5">Best Year 1 Hack</Text>
          <Text color="yellow.300">$350</Text>
          <Text mt="5">Most impressive use of data</Text>
          <Text color="yellow.300">$350</Text>
          <Text mt="5">Most popular hack</Text>
          <Text color="yellow.300">$200</Text>
          <Text mt="5">Point Hogger</Text>
          <Text color="yellow.300">$300</Text>
        </Box>
      </Section>
      {/* <Section heading={'Points'} text={'About'} /> */}
      <Section bg="theme.100" heading="FAQ">
        <Box textAlign="left" maxW="700px" fontSize="xl" m="20px auto">
          <Box mt="10">
            <Heading size="lg">Am I eligible to participate?</Heading>
            <Text>
              This event is open to all current Polytechnic, Junior College and ITE students,
              students awaiting entry to University, and all Undergraduate students.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="lg">Do I need any technical experience or knowledge?</Heading>
            <Text>
              Some knowledge of programming is recommended but not necessary! We have workshops
              planned for you from 4 - 8 July. Attending the workshops will provide you with
              resources and ideas to help you conceptualize and create your hack.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="lg">Am I eligible to participate?</Heading>
            <Text>
              This event is open to all current Polytechnic, Junior College and ITE students,
              students awaiting entry to University, and all Undergraduate students.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="lg">
              {'I don&apos;t have a team member. Can I still participate?'}
            </Heading>
            <Text>
              Each team should have 2 - 4 members. You may email us at lifehack@nuscomputing.com and
              we can try to match you up with someone.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="lg">Will LifeHack 2022 be online or in-person?</Heading>
            <Text>
              LifeHack 2022 will be a hybrid event. The main hackathon event from 4 - 10 July will
              be conducted online while the finale on 16 July will be a physical event.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="lg">
              What&apos;s next after our submission of the registration form?
            </Heading>
            <Text>
              Your registration will be reviewed by our team soon. Upon reviewing all applications,
              we will notify you by email of the outcome of your registration.
            </Text>
          </Box>
          <Box mt="10">
            <Heading size="lg">
              Which platform will be used to disseminate event updates/announcements?
            </Heading>
            <Text>
              We will have a Discord server for participants to join and be updated of workshops or
              mini events throughout the hackathon.
            </Text>
            <Box mt="10">
              <Heading size="lg">Can I use code that I previously wrote?</Heading>
              <Text>
                You are allowed to use snippets of code you have previously written. However,
                copying your entire hack from previous events or from online is strictly not
                allowed.
              </Text>
            </Box>
            <Box mt="10">
              <Heading size="lg">How will the submissions be assessed?</Heading>
              <Text>
                Details on judging criteria and rules will be elaborated upon on the event Opening
                Day (9 July). Judging panels will consist of NUS professors and industry
                professionals.
              </Text>
            </Box>
            <Box mt="10">
              <Heading size="lg">
                Are there any restrictions on platforms and programming languages which can be used?
              </Heading>
              <Text>
                No. Feel free to use any programming language or technology you&apos; re comfortable
                with!
              </Text>
            </Box>
            <Box mt="10">
              <Heading size="lg">Any other questions?</Heading>
              <Text>
                {'Let us know at'}{' '}
                <a href="mailto:lifehack@nuscomputing.com">lifehack@nuscomputing.com!</a>
              </Text>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section heading="Sponsors" text="About" />
    </Box>
  );
};
export default Home;
