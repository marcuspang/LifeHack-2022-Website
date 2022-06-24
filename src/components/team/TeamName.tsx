import { Flex, Box, Heading, Tooltip, Icon, Text } from '@chakra-ui/react';
import { MdCheckCircle, MdClear } from 'react-icons/md';

interface TeamNameProps {
  name: string;
  verified: boolean;
}

const TeamName = ({ name, verified }: TeamNameProps) => {
  return (
    <Flex>
      <Box>
        <Heading as="h2" size="lg" display="inline">
          Team Name
        </Heading>
        <Text fontSize="xl">{name}</Text>
      </Box>
      <Tooltip
        label={'Your team has ' + (verified ? '' : 'not') + ' been verified'}
        placement="bottom"
      >
        <Text height="30px">
          <Icon
            as={verified ? MdCheckCircle : MdClear}
            color={verified ? 'green.500' : 'red.500'}
            ml={2}
            height="30px"
            width="30px"
          />
        </Text>
      </Tooltip>
    </Flex>
  );
};

export default TeamName;
