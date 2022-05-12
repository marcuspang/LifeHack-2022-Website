import { Box, Text, Heading, Center, Button } from '@chakra-ui/react';
import Section from './components/Section';

function App() {
  return (
    <Box>
      <Center p={4}>
        <Box textAlign="center">
          <Heading size={'4xl'}>Lifehack 2022</Heading>
          <Text>Hello there</Text>
          <Button>Register Now</Button>
        </Box>
      </Center>
      <Section heading='About' text='About' />
      <Section heading={'Timeline'} text={'About'} />
      <Section heading={'Workshops'} text={'About'} />
      <Section heading={'Prizes'} text={'About'} />
      <Section heading={'Points'} text={'About'} />
      <Section heading={'FAQ'} text={'About'} />
      <Section heading={'Sponsors'} text={'About'} />
    </Box>
  );
}

export default App;
