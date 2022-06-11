import { Heading } from '@chakra-ui/react';
import EditTeamCardContent from './EditTeamCardContent';

interface EditTeamCardProps {
  teamId?: string;
}

const EditTeamCard = ({ teamId }: EditTeamCardProps) => {
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
