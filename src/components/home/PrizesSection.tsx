import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';
import Section from '../common/Section';

const PrizesSection = () => {
  return (
    <Section heading="Prizes">
      <Text fontSize="3xl" mt="10">
        Main Prizes
      </Text>
      <Center mt={10}>
        <Box>
          <Heading size="2xl" color="yellow.300">
            $3,000
          </Heading>
          <Heading size="xl">Overall Best</Heading>
        </Box>
      </Center>
      <Text fontSize="3xl" mt="10">
        For each Category
      </Text>{' '}
      <Center flexDir={['column', 'column', 'row']}>
        <Box pt={[0, 0, 10]} mt={10} w="200px" order={[2, 2, 1]}>
          <Heading size="lg" color="yellow.300">
            $700 & $400
          </Heading>
          <Heading size="lg">2nd and 3rd</Heading>
        </Box>
        <Box mx={[0, 0, 20]} mt="10" w="200px" order={[1, 1, 2]}>
          <Heading size="xl" color="yellow.300">
            $1,200
          </Heading>
          <Heading size="xl">1st</Heading>
        </Box>
        <Box pt={[0, 0, 10]} mt={10} w="200px" order={3}>
          <Heading size="lg" color="yellow.300">
            $100
          </Heading>
          <Heading size="lg">4th and 5th</Heading>
        </Box>
      </Center>
      <Text fontSize="3xl" mt={10}>
        Special Prizes
      </Text>
      <Stack fontSize="xl" mt="8">
        <Stack>
          <Box>
            <Text>Most Boomer Friendly</Text>
            <Text color="yellow.300">$250</Text>
          </Box>
          <Box>
            <Text mt="5">Most Unorthodox Hack</Text>
            <Text color="yellow.300">$300</Text>
          </Box>
          <Box>
            <Text mt="5">Best Pre-U Hack</Text>
            <Text color="yellow.300">$350</Text>
          </Box>
        </Stack>
        <Box>
          <Text mt="5">Best Year 1 Hack</Text>
          <Text color="yellow.300">$350</Text>
        </Box>
        <Box>
          <Text mt="5">Most impressive use of data</Text>
          <Text color="yellow.300">$350</Text>
        </Box>
        <Box>
          <Text mt="5">Most popular hack</Text>
          <Text color="yellow.300">$200 worth of vouchers</Text>
        </Box>
        <Box>
          <Text mt="5">Point Hogger</Text>
          <Text color="yellow.300">$300</Text>
        </Box>
      </Stack>
    </Section>
  );
};

export default PrizesSection;
