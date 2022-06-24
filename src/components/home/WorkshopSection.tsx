import { Box, Flex, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const WorkshopSection = () => {
  return (
    <Section bg="theme.500" heading="Upcoming Workshops" pt={3}>
      <Box maxW="900px" m="0 auto" textAlign="left" px={6} fontSize="lg" pt={1}>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={12}
        >
          <Heading size="md">4th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>
            <Box>
              <Text color="blue.200" fontWeight={'bold'}>
                NUS FinTech Society
              </Text>
              <Text>Textual Analysis using Natural Language Processing</Text>
              <Text pt={1}>Location: Zoom</Text>
            </Box>
          </Flex>
        </VStack>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={12}
        >
          <Heading size="md">5th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              1400 - 1530
            </Text>

            <Box>
              <Text color="blue.200" fontWeight={'bold'}>
                MuleSoft
              </Text>
              <Text>API Management &amp; MuleSoft Methodoly</Text>
              <Text pt={1}>Location: Salesforce Office, Training Room</Text>
            </Box>
          </Flex>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>
            <Box>
              <Text color="blue.200" as="span" display={'block'} fontWeight={'bold'}>
                NUS Computing Club
              </Text>
              <Text>Building a Telegram Bot using Python</Text>
              <Text pt={1}>Location: Zoom</Text>
            </Box>
          </Flex>
        </VStack>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={12}
        >
          <Heading size="md">6th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>
            <Box>
              <Text color="blue.200" as="span" display={'block'} fontWeight={'bold'}>
                NUS Computing Club
              </Text>{' '}
              <Text>Flutter for Mobile Development</Text>
              <Text pt={1}>Location: Zoom</Text>
            </Box>
          </Flex>
        </VStack>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={12}
        >
          <Heading size="md">7th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>

            <Box>
              <Text color="blue.200" as="span" display={'block'} fontWeight={'bold'}>
                NUS StartIT Society
              </Text>
              <Text>React for Web Development</Text>
              <Text pt={1}>Location: Zoom</Text>
            </Box>
          </Flex>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2100 - 2200
            </Text>
            <Box>
              <Text color="blue.200" as="span" display={'block'} fontWeight={'bold'}>
                NUS Stats &amp; Data Science Society
              </Text>
              <Text>Exploratory Data Analysis &amp; Visualisation</Text>
              <Text pt={1}>Location: Zoom</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Section>
  );
};

export default WorkshopSection;
