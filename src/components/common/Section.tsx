import { Box, BoxProps, Heading, Text } from '@chakra-ui/react';

interface SectionProps extends BoxProps {
  heading: string;
  text?: string;
}

const Section = ({ children, heading, text, ...props }: SectionProps) => {
  return (
    <Box minH={400} textAlign="center" py={12} px={[4, 6, 6, 6]} {...props}>
      <Heading my={[4, 5, 5]} size="2xl" mx={3}>
        {heading}
      </Heading>
      <Text>{text}</Text>
      {children}
    </Box>
  );
};

export default Section;
