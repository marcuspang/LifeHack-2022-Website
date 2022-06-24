import { Link, ListIcon, ListItem, Text, Tooltip } from '@chakra-ui/react';
import { User } from '@prisma/client';
import NextLink from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

interface TeamMemberDetailsProps {
  user: User;
}

const TeamMemberDetails = ({ user }: TeamMemberDetailsProps) => {
  return (
    <Tooltip label={user.name + ' has earned ' + user.points + ' points'} placement="auto-start">
      <ListItem key={user.email} width="auto">
        <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
        <Text as="span">{user.name}</Text>{' '}
        <NextLink href={'mailto:' + user.email} passHref>
          <Link color="blue.200">({user.email})</Link>
        </NextLink>
      </ListItem>
    </Tooltip>
  );
};

export default TeamMemberDetails;
