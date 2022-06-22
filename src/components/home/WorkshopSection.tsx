import { Box, Flex, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const WorkshopSection = () => {
  return (
    <Section bg="theme.500" heading="Upcoming Workshops">
      <Box maxW="900px" m="0 auto" textAlign="left" px={6} fontSize="lg">
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={[10, 20]}
        >
          <Heading size="md">4th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>
            <Text>
              <Text color="blue.200" as="span" fontWeight={'bold'}>
                NUS FinTech Society:{' '}
              </Text>
              Textual Analysis using Natural Language Processing
            </Text>
          </Flex>
        </VStack>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={[10, 20]}
        >
          <Heading size="md">5th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>

            <Text>
              <Text color="blue.200" as="span" fontWeight={'bold'}>
                NUS Computing Club:{' '}
              </Text>
              Building a Telegram Bot using Python
            </Text>
          </Flex>
        </VStack>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={[10, 20]}
        >
          <Heading size="md">6th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>
            <Text>
              <Text color="blue.200" as="span" fontWeight={'bold'}>
                NUS Computing Club:{' '}
              </Text>{' '}
              Flutter for Mobile Development
            </Text>
          </Flex>
        </VStack>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={[10, 20]}
        >
          <Heading size="md">7th July</Heading>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2000 - 2100
            </Text>
            <Text>
              <Text color="blue.200" as="span" fontWeight={'bold'}>
                NUS StartIT Society:{' '}
              </Text>
              React for Web Development
            </Text>
          </Flex>
          <Flex w="100%">
            <Text flex="0 0 120px" mr="5">
              2100 - 2200
            </Text>
            <Text>
              <Text color="blue.200" as="span" fontWeight={'bold'}>
                NUS Stats &amp; Data Science Society:{' '}
              </Text>
              Exploratory Data Analysis &amp; Visualisation
            </Text>
          </Flex>
        </VStack>
      </Box>
    </Section>
  );
};

export default WorkshopSection;
