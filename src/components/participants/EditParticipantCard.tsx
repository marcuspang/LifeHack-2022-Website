import { Heading } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import EditParticipantCardContent from './EditParticipantCardContent';

interface EditParticipantCardProps {
  userId?: string;
}

const EditParticipantCard = ({ userId }: EditParticipantCardProps) => {
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

  if (!userId) {
    return (
      <Heading as="h2" size="lg">
        Enter a valid user ID
      </Heading>
    );
  }

  return <EditParticipantCardContent userId={userId} />;
};

export default EditParticipantCard;
