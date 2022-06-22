import { Box, Flex, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const SponsorsSection = () => {
  return (
    <Section heading="Our Sponsors" pt={0} maxW="3xl" mx="auto">
      <SimpleGrid mt={[0, 10, 20]} mb={12} columns={2} spacing={10} justifyItems="center">
        <Heading color="yellow.200">Gold Sponsor</Heading>
        <Heading color="blue.200">Club Sponsor</Heading>
        <Box bg="white" p={8} rounded="xl" width={'50%'}>
          <Image src="/tiktok-logo.png" alt="Tiktok Logo" />
        </Box>
        <Flex bg="white" rounded="xl" alignItems="center" width={'50%'}>
          <Image src="/ncs-logo.jpg" alt="NCS Logo" />
        </Flex>
      </SimpleGrid>
    </Section>
  );
};

export default SponsorsSection;
