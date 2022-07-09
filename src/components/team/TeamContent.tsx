import { Activities, Team, TeamRequest, User } from '@prisma/client';
import NoTeamContent from './NoTeamContent';
import TeamActivities from './TeamActivities';
import TeamCardActions from './TeamCardActions';
import TeamMembers from './TeamMembers';
import TeamName from './TeamName';
import TeamPoints from './TeamPoints';
import TeamRequests from './TeamRequests';
import { unionBy } from 'lodash';

export type ActivitiesWithParticipants = Activities & { participants: User[] };
export type TeamRequestsWithRequestee = TeamRequest & { requestee: User };
export type UserWithActivitiesParticipants = User & { activities: ActivitiesWithParticipants[] };

export interface TeamInterface extends Team {
  users: UserWithActivitiesParticipants[];
  teamRequests: TeamRequestsWithRequestee[];
  activities: ActivitiesWithParticipants[];
}

interface TeamContentProps {
  data?: TeamInterface;
  isEditing?: boolean;
  withLink?: boolean;
}

const TeamContent = ({ data, isEditing, withLink }: TeamContentProps) => {
  if (!data) {
    return <NoTeamContent isEditing={isEditing} />;
  }

  return (
    <>
      <TeamName name={data.name} verified={data.verified} />
      <TeamPoints points={data.points} />
      <TeamActivities
        activities={unionBy(
          data.activities,
          data.users
            .map((user) => user.activities)
            .reduce((prev, curr) => (prev ? prev.concat(curr, []) : curr)),
          'id'
        )}
        withLink={withLink}
      />
      <TeamMembers teamMembers={data.users} withLink={withLink} />
      <TeamRequests teamRequests={data.teamRequests} />
      <TeamCardActions teamId={data.id} isEditing={isEditing} />
    </>
  );
};

export default TeamContent;
