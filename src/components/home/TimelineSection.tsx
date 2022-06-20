import { Box, Flex, Heading, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const TimelineSection = () => {
  return (
    <Section bg="theme.300" heading="Timeline">
      <Box maxW="900px" m="0 auto" textAlign="left" px={6}>
        <SimpleGrid mt={[0, 10, 20]} columns={[1, 1, 2]} spacing={10}>
          <VStack divider={<StackDivider borderColor="gray.400" />} spacing={4} align="flex-start">
            <Heading size="md">Day 1: Opening Day (9th July)</Heading>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                0900 - 0910
              </Text>
              <Text>Welcome Address</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                0910 - 0920
              </Text>
              <Text>Reiteration of Objectives, Guidelines and Actionables</Text>
            </Flex>

            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                0920 - 0940
              </Text>
              <Text>“How it works” Briefing</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                0940 - 0950
              </Text>
              <Text>Sharing of available platforms/workshops and helplines available from SoC</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                0950 - 1010
              </Text>
              <Text>Live Q&A (Pigeon Hole)</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1010 - 1020
              </Text>
              <Text>Break</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1020 - 1120
              </Text>
              <Text>Panel Discussion</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1120 - 1150
              </Text>
              <Text>Sponsorship Talks</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1150 - 1155
              </Text>
              <Text>Taking a picture with everyone</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1155 - 1200
              </Text>
              <Text>Release of Problem Statements at 12!</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1200
              </Text>
              <Text>Discord Q&A with Industry Experts</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                2030 - 2145
              </Text>
              <Text>Games</Text>
            </Flex>
          </VStack>
          <VStack divider={<StackDivider borderColor="gray.400" />} spacing={4} align="flex-start">
            <Heading size="md">Day 2: Submission Day (10th July)</Heading>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1200
              </Text>
              <Text>Submission Deadline</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1200 - 1800
              </Text>
              <Text>Judging</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1800 - 1900
              </Text>
              <Text>Moderation of Marks</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                2000
              </Text>
              <Text>Announcements of top projects and special prize winners!</Text>
            </Flex>
          </VStack>
        </SimpleGrid>
        <Box mb={5}>
          <VStack
            divider={<StackDivider borderColor="gray.400" />}
            spacing={4}
            align="flex-start"
            mt={[10, 20]}
          >
            <Heading size="md">Day 3: Finale Day (16th July)</Heading>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1000 - 1015
              </Text>
              <Text flex="1 0 auto">Opening Address</Text>
            </Flex>

            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1030 - 1115
              </Text>
              <Text>Presentation by Top 3 Teams from Giving Back Theme</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1115 - 1200
              </Text>
              <Text>Presentation by Top 3 Teams from Environment Theme</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1200 - 1245
              </Text>
              <Text flex="1 1 auto">Presentation by Top 3 Teams from Safety Theme</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1245 - 1430
              </Text>
              <Text>Lunch</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1430 - 1450
              </Text>
              <Text>Kahoot Trivia Quiz (Environment, Giving Back, Safety)</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1450 - 1505
              </Text>
              <Text>Lucky Draw</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1510 - 1530
              </Text>
              <Text>Prize Presentation by Computing Club President</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1530 - 1545
              </Text>
              <Text>Closing Ceremony</Text>
            </Flex>
            <Flex w="100%">
              <Text flex="0 0 100px" mr="5">
                1630
              </Text>
              <Text>Closing of Sponsor Booths</Text>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Section>
  );
};

export default TimelineSection;
