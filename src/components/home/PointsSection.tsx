import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Section from '../common/Section';

const PointsSection = () => {
  return (
    <Section bg="theme.500" heading="Point System">
      <Box textAlign="left" maxW="700px" fontSize={['lg', 'lg', 'xl']} m="20px auto" px={6}>
        <Box mt="10">
          <Text>
            The point system provides a chance for teams to be able to win some prizes through
            active participation in LifeHack 2022!
          </Text>
        </Box>
        <Box mt="10">
          <Heading size="md" mb={3}>
            How do we earn points?
          </Heading>
          <List>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" height="26px" />
              Attending Workshops
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" height="26px" />
              Sponsor booths
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" height="26px" />
              Games (Wikipedia, Guess the Song, Crossword Puzzle)
            </ListItem>
          </List>
        </Box>
        <Box mt="10">
          <Heading size="md" mb={3}>
            Well, what's the
            <Text as="span" fontStyle="italic">
              {' '}
              point{' '}
            </Text>
            of points?
          </Heading>
          <Text>
            The team with the most points will be awarded the Point Hogger prize!
          </Text>
        </Box>
      </Box>
    </Section>
  );
};

export default PointsSection;
