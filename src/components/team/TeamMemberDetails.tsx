import { Link, ListIcon, ListItem, Text, Tooltip } from '@chakra-ui/react';
import { User } from '@prisma/client';
import NextLink from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

interface TeamMemberDetailsProps {
  user: Pick<User, 'name' | 'email' | 'points' | 'id'>;
  withLink?: boolean;
}

const TeamMemberDetails = ({ user, withLink }: TeamMemberDetailsProps) => {
  const tooltipLabel = user.name + ' has earned ' + user.points + ' points';
  return (
    <ListItem key={user.email} width="auto">
      <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
      {withLink ? (
        <NextLink href={'/users/' + user.id} passHref>
          <Link color="blue.200">
            <Tooltip label={tooltipLabel}>{user.name}</Tooltip>
          </Link>
        </NextLink>
      ) : (
        <Text as="span">
          <Tooltip label={tooltipLabel}>{user.name}</Tooltip>
        </Text>
      )}{' '}
      <NextLink href={'mailto:' + user.email} passHref>
        <Link color="blue.200">({user.email})</Link>
      </NextLink>
    </ListItem>
  );
};

export default TeamMemberDetails;
