import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { IconButton, Link, List, ListItem, Text, Tooltip, useToast } from '@chakra-ui/react';
import { Response, Team, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import { ErrorMessages } from 'constants/errors';
import useSWR, { useSWRConfig } from 'swr';
import NextLink from 'next/link';
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
  } = useSWR<TeamRequestInterface[]>('/api/user/team-requests');
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
      '/api/team-requests/' + teamRequestId + '?' + new URLSearchParams({ accept: String(accept) });
    try {
      const res = await fetch(url, {
        method: 'PATCH',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error.message);
      }
      await mutateRequests();
      await mutate('/api/user');
      if (accept === Response.ACCEPTED) {
        toast({
          status: 'success',
          title: 'Successfully joined ' + teamName,
          isClosable: true,
        });
      } else {
        toast({
          status: 'success',
          title: 'Successfully rejected ' + teamName,
          isClosable: true,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error responding to team request',
          description: error.message,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error responding to team request',
          description: ErrorMessages.DEFUALT,
          isClosable: true,
        });
      }
    }
  };

  return (
    <List spacing={3}>
      {data.map((teamRequest) => (
        <ListItem key={teamRequest.id}>
          <Tooltip label="Accept team request">
            <IconButton
              aria-label="Accept team request"
              icon={<CheckIcon />}
              bg="transparent"
              _hover={{ bg: 'gray.600' }}
              onClick={() =>
                respondToRequest(teamRequest.id, teamRequest.team.name, Response.ACCEPTED)
              }
            />
          </Tooltip>
          <Tooltip label="Cancel team request">
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
          </Tooltip>
          Team
          <Text as="span" fontWeight="bold" color="blue.100">
            {' '}
            {teamRequest.team.name}{' '}
          </Text>
          from
          <Text as="span" fontWeight="bold" color="blue.100">
            {' '}
            {teamRequest.requestor.name}{' '}
          </Text>
          <NextLink href={'mailto:' + teamRequest.requestor.email} passHref>
            <Link fontWeight="bold" color="blue.100">
              ({teamRequest.requestor.email})
            </Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NoTeamPendingRequests;
