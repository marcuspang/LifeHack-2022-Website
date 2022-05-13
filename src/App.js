import { Box, Text, Heading, Center, Button } from '@chakra-ui/react';
import Section from './components/Section';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <Header />
      <Section bg="theme.200" heading="About">
        <Text m={"0 auto"} w={"70%"} pt={3} fontSize={"2xl"}>
          LifeHack 2021 is a 24-Hour virtual hackathon that wants you to develop
          innovative software solutions to make a positive change in peoples’
          lives in a post-COVID world. Through exciting workshops and events,
          you will have the chance to learn various technologies from web
          development to utilizing cloud services.
        </Text>
      </Section>
      <Section bg="theme.500" heading={'Timeline'} text={'About'} />
      <Section heading={'Workshops'} text={'About'} />
      <Section heading={'Prizes'} text={'About'} />
      <Section heading={'Points'} text={'About'} />
      <Section heading={'FAQ'} text={'About'} />
      <Section heading={'Sponsors'} text={'About'} />
    </Box>
  );
}

export default App;
