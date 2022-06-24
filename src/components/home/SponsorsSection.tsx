import { Box, Heading, Image } from '@chakra-ui/react';
import Section from 'components/common/Section';
import NextLink from 'next/link';

const SponsorsSection = () => {
  return (
    <Section heading="Our Sponsors" pt={10} pb={20} maxW="5xl" mx="auto">
      <Heading color="blue.300" mt={12} mb={6}>
        Club Sponsors
      </Heading>
      <NextLink href="https://www.ncs.co/en-sg/opportunities/" passHref>
        <Box
          mx="auto"
          as={'a'}
          target="_blank"
          rel="noopener noreferrer"
          display="inline-block"
          transition="opacity 0.1s ease-in-out"
          cursor={'pointer'}
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image
            src="/ncs-logo.jpg"
            alt="NCS Logo"
            bg="white"
            rounded="3xl"
            width={['120px', '150px', '200px']}
            height={['120px', '150px', '200px']}
            mx="auto"
            objectFit={'contain'}
          />
        </Box>
      </NextLink>
      <Heading color="yellow.300" mt={12} mb={6}>
        Gold Sponsors
      </Heading>
      <NextLink href="https://careers.tiktok.com/" passHref>
        <Box
          mx="auto"
          as={'a'}
          target="_blank"
          rel="noopener noreferrer"
          display="inline-block"
          transition="opacity 0.1s ease-in-out"
          cursor={'pointer'}
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image
            src="/tiktok-logo.png"
            padding={8}
            bg="white"
            rounded="3xl"
            width={['120px', '150px', '200px']}
            height={['120px', '150px', '200px']}
            alt="Tiktok Logo"
            objectFit={'contain'}
          />
        </Box>
      </NextLink>
      <Heading color="yellow.500" mt={12} mb={6}>
        Bronze Sponsors
      </Heading>
      <NextLink href="https://www.ccsgp.comp.nus.edu.sg" passHref>
        <Box
          mx="auto"
          as={'a'}
          target="_blank"
          rel="noopener noreferrer"
          display="inline-block"
          transition="opacity 0.1s ease-in-out"
          cursor={'pointer'}
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image
            src="/ccsgp-logo.png"
            bg="white"
            rounded="3xl"
            width={['120px', '150px', '200px']}
            height={['120px', '150px', '200px']}
            alt="CCSGP Logo"
            objectFit={'contain'}
          />
        </Box>
      </NextLink>
    </Section>
  );
};

export default SponsorsSection;
