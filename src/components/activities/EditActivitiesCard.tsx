import { Heading } from '@chakra-ui/react';
import EditActivitiesCardContent from './EditActivitiesCardContent';

interface EditActivitiesCardProps {
  activityId?: string;
}

const EditActivitiesCard = ({ activityId }: EditActivitiesCardProps) => {
  if (!activityId) {
    return (
      <Heading as="h2" size="lg">
        Enter a valid teamId
      </Heading>
    );
  }

  return <EditActivitiesCardContent activityId={activityId} />;
};

export default EditActivitiesCard;
