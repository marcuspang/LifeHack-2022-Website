import { Button, Link, Text } from '@chakra-ui/react';
import Section from '../common/Section';

const CallToActionSection = () => {
  return (
    <Section bg="theme.500" heading="See you then!👋">
      <Text fontWeight={600} fontSize="2xl" color="gray.300" mb={2}>
        Make sure to fill up this form below too!
      </Text>
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
      >
        Registration Form
      </Button>
    </Section>
  );
};

export default CallToActionSection;
