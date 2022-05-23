import { Box } from '@chakra-ui/react';
import React from 'react';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import Hero from '../components/Hero';
import PrizesSection from '../components/PrizesSection';
import SponsorsSection from '../components/SponsorsSection';
import TimelineSection from '../components/TimelineSection';

const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <AboutSection />
      <TimelineSection />
      <PrizesSection />

      {/* <Section heading={'Points'} text={'About'} /> */}
      <FAQSection />
      <SponsorsSection />
    </Box>
  );
};
export default Home;
