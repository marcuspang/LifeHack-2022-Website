import { Box } from '@chakra-ui/react';
import React from 'react';
import AboutSection from '../components/home/AboutSection';
import FAQSection from '../components/home/FAQSection';
import Hero from '../components/home/Hero';
import PrizesSection from '../components/home/PrizesSection';
import SponsorsSection from '../components/home/SponsorsSection';
import TimelineSection from '../components/home/TimelineSection';

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
