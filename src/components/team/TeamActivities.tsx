import { Stack, Heading, List, Tooltip, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { TeamInterface } from './TeamContent';

interface TeamActivitiesProps {
  activities: TeamInterface['activities'];
}

const TeamActivities = ({ activities }: TeamActivitiesProps) => {
  return (
    <Stack pt={6}>
      <Heading as="h3" size="md" display="inline">
        Activities Participated
      </Heading>
      <List spacing={3}>
        {activities.length &&
          activities.map((activity) => (
            <Tooltip
              key={activity.id}
              label={
                activity.points +
                ' points by ' +
                (activity.participants.length > 0
                  ? activity.participants.map((participant) => participant.email).join(', ')
                  : 'the team')
              }
              placement="auto-start"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
                {activity.name}
              </ListItem>
            </Tooltip>
          ))}
      </List>
    </Stack>
  );
};

export default TeamActivities;
