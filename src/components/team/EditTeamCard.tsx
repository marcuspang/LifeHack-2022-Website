import { Heading } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import TeamContent, { TeamInterface } from './TeamContent';

interface EditTeamCardProps {
  teamId?: string;
}

const EditTeamCard = ({ teamId }: EditTeamCardProps) => {
  const { data: userData, status } = useSession();
  const { data, isValidating } = useSWR<TeamInterface>(teamId && '/api/teams/' + teamId);
  const router = useRouter();

  if (
    (status === 'authenticated' && userData.user.role !== Role.ADMIN) ||
    status === 'unauthenticated'
  ) {
    router.push('/');
    return <Loader />;
  }

  if (status === 'loading' || isValidating) {
    return <Loader />;
  }

  if (!teamId) {
    return (
      <Heading as="h2" size="lg">
        Enter a valid teamId
      </Heading>
    );
  }

  return <TeamContent data={data} isEditing withLink />;
};

export default EditTeamCard;
