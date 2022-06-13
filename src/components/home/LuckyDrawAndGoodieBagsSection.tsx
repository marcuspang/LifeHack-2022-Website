import { Text } from '@chakra-ui/react';
import Section from '../common/Section';

const LuckyDrawAndGoodieBagsSection = () => {
  return (
    <Section bg="theme.500" heading="Lucky Draws and Goodie Bags" pb={0}>
      <Text fontSize="xl" maxW="700px" mx="auto" mt={4}>
        Stay tuned for our lucky draws, where
        <Text as="span" color="yellow.300">
          {' '}
          $1000+ worth of vouchers{' '}
        </Text>
        and other goodies will be up for grabs!
      </Text>
      <Text fontSize="xl" maxW="700px" mx="auto" mt={6}>
        First 50 teams to register and submit a hack on DevPost gets a{' '}
        <Text as="span" color="yellow.300">
          LifeHack 2022 goodie bag!
        </Text>
      </Text>
    </Section>
  );
};

export default LuckyDrawAndGoodieBagsSection;