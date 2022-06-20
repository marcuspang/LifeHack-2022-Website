import { Box } from '@chakra-ui/react';
import AboutSection from 'components/home/AboutSection';
import CallToActionSection from 'components/home/CallToActionSection';
import FAQSection from 'components/home/FAQSection';
import Hero from 'components/home/Hero';
import LuckyDrawAndGoodieBagsSection from 'components/home/LuckyDrawAndGoodieBagsSection';
import PointsSection from 'components/home/PointsSection';
import PrizesSection from 'components/home/PrizesSection';
import SponsorsSection from 'components/home/SponsorsSection';
import TimelineSection from 'components/home/TimelineSection';
import WorkshopSection from 'components/home/WorkshopSection';

const Home = () => {
  return (
    <Box as="main">
      <Hero />
      <AboutSection />
      <TimelineSection />
      <PrizesSection />
      <PointsSection />
      <WorkshopSection />
      <LuckyDrawAndGoodieBagsSection />
      <SponsorsSection />
      <FAQSection />
      <CallToActionSection />
    </Box>
  );
};
export default Home;
