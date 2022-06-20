import { Box, Flex, Heading, StackDivider, Text, VStack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const WorkshopSection = () => {
  return (
    <Section bg="theme.500" heading="Upcoming Workshops">
      <Box maxW="900px" m="0 auto" textAlign="left" px={6}>
        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={4}
          align="flex-start"
          mt={[10, 20]}
        >
          {/* <Flex w="100%">
            <Heading flex="0 0 100px" mr="5" size="md" fontWeight={600}>
              4th July
            </Heading>
            <Text>NUS FinTech SoC: Incorporating Machine Learning</Text>
          </Flex> */}
          <Flex w="100%">
            <Heading flex="0 0 100px" mr="5" size="md">
              Date: TBC
            </Heading>
            <Text>More workshops will be announced closer to the hackathon!</Text>
          </Flex>
        </VStack>
      </Box>
    </Section>
  );
};

export default WorkshopSection;
