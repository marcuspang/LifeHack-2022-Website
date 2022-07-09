import { ListItem, ListIcon, Link, Tooltip, Text } from '@chakra-ui/react';
import { ActivitiesWithParticipants } from 'components/team/TeamContent';
import NextLink from 'next/link';
import { MdCheckCircle } from 'react-icons/md';

type ActivitiesDetailsProps = Partial<ActivitiesWithParticipants> & {
  withLink?: boolean;
  withDetailedDescription?: boolean;
};

const ActivitiesDetails = ({
  id,
  name,
  points,
  participants,
  withLink,
  withDetailedDescription,
}: ActivitiesDetailsProps) => {
  const tooltipLabel = withDetailedDescription
    ? points +
      ' points by ' +
      (participants && participants.length > 0
        ? participants.map((participant) => participant.email).join(', ')
        : 'the team')
    : points + ' points';
  return (
    <ListItem>
      <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
      {withLink ? (
        <NextLink href={'/activities/' + id} passHref>
          <Link color="blue.200">
            <Tooltip label={tooltipLabel}>{name}</Tooltip>
          </Link>
        </NextLink>
      ) : (
        <Text as="span">
          <Tooltip label={tooltipLabel}>{name}</Tooltip>
        </Text>
      )}
    </ListItem>
  );
};

export default ActivitiesDetails;
