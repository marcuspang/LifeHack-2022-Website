import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';

interface SectionProps extends BoxProps {
  heading: string;
  text?: string;
}

const Section = ({ children, heading, text, ...props }: SectionProps) => {
  return (
    <Box minH={400} p={4} textAlign="center" py={12} px={6} {...props}>
      <Heading my={[2, 5, 5]} size="2xl">
        {heading}
      </Heading>
      <Text>{text}</Text>
      {children}
    </Box>
  );
};

export default Section;
