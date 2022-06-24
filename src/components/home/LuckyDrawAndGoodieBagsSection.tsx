import { Text } from '@chakra-ui/react';
import Section from 'components/common/Section';

const LuckyDrawAndGoodieBagsSection = () => {
  return (
    <Section bg="theme.500" heading="Lucky Draws and Goodie Bags" minHeight={200}>
      <Text fontSize="xl" maxW="700px" mx="auto" pt={8}>
        Stay tuned for our lucky draws, where
        <Text as="span" color="yellow.300">
          {' '}
          $1000+ worth of vouchers{' '}
        </Text>
        and other goodies will be up for grabs!
      </Text>
      <Text fontSize="xl" maxW="700px" mx="auto" mt={6}>
        First 50 teams to register will also get a{' '}
        <Text as="span" color="yellow.300">
          LifeHack 2022 goodie bag,{' '}
        </Text>
        provided you submit your hack on DevPost.
      </Text>
    </Section>
  );
};

export default LuckyDrawAndGoodieBagsSection;
