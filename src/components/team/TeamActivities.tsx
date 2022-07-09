import { Heading, List, Stack } from '@chakra-ui/react';
import ActivitiesDetails from 'components/activities/ActivitiesDetails';
import { ActivitiesWithParticipants } from './TeamContent';

interface TeamActivitiesProps {
  activities: ActivitiesWithParticipants[];
  withLink?: boolean;
}

const TeamActivities = ({ activities, withLink }: TeamActivitiesProps) => {
  return (
    <Stack pt={6}>
      <Heading as="h3" size="md" display="inline">
        Activities Participated
      </Heading>
      <List spacing={3}>
        {activities.length &&
          activities.map((activity) => (
            <ActivitiesDetails
              key={activity.id}
              {...activity}
              withLink={withLink}
              withDetailedDescription
            />
          ))}
      </List>
    </Stack>
  );
};

export default TeamActivities;
