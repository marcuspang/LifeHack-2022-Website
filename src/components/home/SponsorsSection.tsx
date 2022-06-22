import { Box, Flex, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const SponsorsSection = () => {
  return (
    <Section heading="Our Sponsors" pt={10} maxW="3xl" mx="auto">
      <SimpleGrid
        mt={[0, 10, 10]}
        mb={12}
        columns={[1, 2, 2]}
        spacing={[2, 2, 10]}
        justifyItems="center"
      >
        <Heading order={1} color="yellow.200" mt={10} mb={6}>
          Gold Sponsor
        </Heading>
        <Heading order={[3, 2, 2, 2]} color="blue.200" mt={10} mb={6}>
          Club Sponsor
        </Heading>
        <Box
          order={[2, 3, 3, 3]}
          bg="white"
          p={8}
          rounded="xl"
          width={['50%', '60%', '50%']}
        >
          <Image src="/tiktok-logo.png" alt="Tiktok Logo" />
        </Box>
        <Flex
          order={4}
          bg="white"
          rounded="xl"
          alignItems="center"
          width={['50%', '60%', '50%']}
          minHeight={['150px', 'auto', 'auto']}
        >
          <Image src="/ncs-logo.jpg" alt="NCS Logo" />
        </Flex>
      </SimpleGrid>
    </Section>
  );
};

export default SponsorsSection;
