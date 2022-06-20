import { Button, Link, Stack, Text } from '@chakra-ui/react';
import Section from 'components/common/Section';

const CallToActionSection = () => {
  return (
    <Section bg="theme.500" heading="See you then!👋">
      <Text fontWeight={600} fontSize="2xl" color="gray.300" mb={2}>
        Make sure to fill up this form below too!
      </Text>
      <Stack>
        <Button
          as={Link}
          p={6}
          onClick={() => {
            window.location.href = 'https://nus.campuslabs.com/engage/submitter/form/start/545156';
          }}
          variant="cta"
          fontSize={['lg', 'xl', 'xl']}
          mt={3}
          colorScheme="blue"
          size="lg"
          width={['auto', '300px', '300px', '300px']}
          mx="auto"
        >
          Registration Form
        </Button>
        <Text as="span" color="gray.400" mt={2}>
          Deadline: 27th June
        </Text>
      </Stack>
    </Section>
  );
};

export default CallToActionSection;
