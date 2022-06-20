import { Box, Stack } from '@chakra-ui/react';
import Section from 'components/common/Section';
import Image from 'next/image';

const SponsorsSection = () => {
  return (
    <Section heading="Our Sponsors" pt={0}>
      <Stack maxW="700px" mx="auto" direction="row" justifyContent="center" pt={5}>
        {/* <Flex bg="white" p={8} rounded="md" position="relative" alignItems="center">
          <Image src="/ncs_logo.png" width="100%" height="25%" />
        </Flex> */}
        <Box bg="white" p={8} rounded="md">
          <Image src="/tiktok_logo.png" width="100%" height="100%" />
        </Box>
      </Stack>
    </Section>
  );
};

export default SponsorsSection;
