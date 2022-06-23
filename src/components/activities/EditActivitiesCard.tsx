import { Heading } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import EditActivitiesCardContent from './EditActivitiesCardContent';

interface EditActivitiesCardProps {
  activityId?: string;
}

const EditActivitiesCard = ({ activityId }: EditActivitiesCardProps) => {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <Loader />;
  }

  if (
    (status === 'authenticated' && data.user.role !== Role.ADMIN) ||
    status === 'unauthenticated'
  ) {
    router.push('/');
    return <Loader />;
  }

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
