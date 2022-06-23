import { Heading } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import EditTeamCardContent from './EditTeamCardContent';

interface EditTeamCardProps {
  teamId?: string;
}

const EditTeamCard = ({ teamId }: EditTeamCardProps) => {
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

  if (!teamId) {
    return (
      <Heading as="h2" size="lg">
        Enter a valid teamId
      </Heading>
    );
  }

  return <EditTeamCardContent teamId={teamId} />;
};

export default EditTeamCard;
