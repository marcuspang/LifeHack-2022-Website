import { Heading } from '@chakra-ui/react';
import EditParticipantCardContent from './EditParticipantCardContent';

interface EditParticipantCardProps {
  userId?: string;
}

const EditParticipantCard = ({ userId }: EditParticipantCardProps) => {
  if (!userId) {
    return (
      <Heading as="h2" size="lg">
        Enter a valid teamId
      </Heading>
    );
  }

  return <EditParticipantCardContent userId={userId} />;
};

export default EditParticipantCard;
