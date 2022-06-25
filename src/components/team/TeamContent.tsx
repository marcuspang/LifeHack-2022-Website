import { Activities, Team, TeamRequest, User } from '@prisma/client';
import NoTeamContent from './NoTeamContent';
import TeamActivities from './TeamActivities';
import TeamCardActions from './TeamCardActions';
import TeamMembers from './TeamMembers';
import TeamName from './TeamName';
import TeamPoints from './TeamPoints';
import TeamRequests from './TeamRequests';
import { union } from 'lodash';

export interface TeamInterface extends Team {
  users: (User & { activities: TeamInterface['activities'] })[];
  teamRequests: (TeamRequest & { requestee: User })[];
  activities: (Activities & { participants: User[] })[];
}

interface TeamContentProps {
  data?: TeamInterface;
  isEditing?: boolean;
}

const TeamContent = ({ data, isEditing }: TeamContentProps) => {
  if (!data) {
    return <NoTeamContent isEditing={isEditing} />;
  }

  return (
    <>
      <TeamName name={data.name} verified={data.verified} />
      <TeamPoints points={data.points} />
      <TeamActivities
        activities={union(
          data.activities,
          data.users.map((user) => user.activities).reduce((prev, curr) => prev.concat(curr))
        )}
      />
      <TeamMembers teamMembers={data.users} />
      <TeamRequests teamRequests={data.teamRequests} />
      <TeamCardActions teamId={data.id} isEditing={isEditing} />
    </>
  );
};

export default TeamContent;
