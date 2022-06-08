import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton, List, ListItem, Text, useToast } from '@chakra-ui/react';
import { Team, User, Response } from '@prisma/client';
import useSWR, { useSWRConfig } from 'swr';
import { ErrorMessages } from '../../../constants/errors';
import Loader from '../common/Loader';

interface TeamRequestInterface {
  id: string;
  requestor: User;
  team: Team;
}

const NoTeamPendingRequests = () => {
  const {
    isValidating,
    data,
    mutate: mutateRequests,
  } = useSWR<TeamRequestInterface[]>('api/users/team-requests');
  const { mutate } = useSWRConfig();
  const toast = useToast();

  if (isValidating) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <Text>No pending requests.</Text>;
  }

  const respondToRequest = async (teamRequestId: string, teamName: string, accept: Response) => {
    const url =
      'api/team-requests/' + teamRequestId + '?' + new URLSearchParams({ accept: String(accept) });
    try {
      await fetch(url, {
        method: 'PATCH',
      });
      await mutateRequests();
      await mutate('api/users/team');
      if (accept === Response.ACCEPTED) {
        toast({
          status: 'success',
          title: 'Successfully joined ' + teamName,
        });
      } else {
        toast({
          status: 'success',
          title: 'Successfully rejected ' + teamName,
        });
      }
    } catch (error) {
      toast({
        status: 'error',
        title: 'Error responding to team request',
        description: ErrorMessages.DEFUALT,
      });
    }
  };

  return (
    <List spacing={3}>
      {data.map((teamRequest) => (
        <ListItem key={teamRequest.id}>
          <IconButton
            aria-label="Accept team request"
            icon={<CheckIcon />}
            bg="transparent"
            _hover={{ bg: 'gray.600' }}
            onClick={() =>
              respondToRequest(teamRequest.id, teamRequest.team.name, Response.ACCEPTED)
            }
          />
          <IconButton
            ml={3}
            aria-label="Cancel team request"
            icon={<CloseIcon />}
            bg="transparent"
            _hover={{ bg: 'gray.600' }}
            mr={3}
            onClick={() =>
              respondToRequest(teamRequest.id, teamRequest.team.name, Response.REJECTED)
            }
          />
          Team
          <Text as="span" fontWeight="bold" color="blue.100">
            {' '}
            {teamRequest.team.name}{' '}
          </Text>
          by
          <Text as="span" fontWeight="bold" color="blue.100">
            {' '}
            {teamRequest.requestor.name} ({teamRequest.requestor.email})
          </Text>
        </ListItem>
      ))}
    </List>
  );
};

export default NoTeamPendingRequests;
