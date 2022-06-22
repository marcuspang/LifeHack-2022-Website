import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import Section from 'components/common/Section';

const SponsorsSection = () => {
  return (
    <Section heading="Our Sponsors" pt={0}>
      <Stack
        maxW="380px"
        mx="auto"
        direction="row"
        justifyContent="center"
        pt={5}
        spacing={[4, 8, 8, 8]}
      >
        <Flex bg="white" rounded="xl" alignItems="center" width={'50%'}>
          <Image src="/ncs-logo.jpg" alt="NCS Logo" />
        </Flex>
        <Box bg="white" p={8} rounded="xl" width={'50%'}>
          <Image src="/tiktok-logo.png" alt="Tiktok Logo" />
        </Box>
      </Stack>
    </Section>
  );
};

export default SponsorsSection;
