import { Button, Stack, Text } from '@chakra-ui/react';
import Section from 'components/common/Section';
import { MdArrowUpward } from 'react-icons/md';

const CallToActionSection = () => {
  return (
    <Section bg="theme.500" heading="See you then!👋" px={5}>
      <Text fontWeight={600} fontSize="2xl" color="gray.300" mb={2}>
        Remember to create a team above!
      </Text>
      <Stack>
        <Button
          p={6}
          variant="cta"
          fontSize={['lg', 'xl', 'xl']}
          fontWeight={600}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          mt={3}
          size="lg"
          width={['auto', '300px', '300px', '300px']}
          mx="auto"
          rightIcon={<MdArrowUpward />}
        >
          Back to the top
        </Button>
      </Stack>
    </Section>
  );
};

export default CallToActionSection;
