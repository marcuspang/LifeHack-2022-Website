import { CloseIcon } from '@chakra-ui/icons';
import { ListItem, ListIcon, Tooltip, IconButton, Text, Link, useToast } from '@chakra-ui/react';
import { TeamRequest as TeamRequestDetails, User } from '@prisma/client';
import { ErrorMessages } from 'constants/errors';
import useMatchMutate from 'hooks/useMatchMutate';
import NextLink from 'next/link';
import { MdPending, MdClear, MdCheck } from 'react-icons/md';

interface TeamRequestDetailsProps {
  request: Pick<TeamRequestDetails, 'id' | 'approved'> & {
    user: Pick<User, 'name' | 'email'>;
  };
  hideApprovedRequests?: boolean;
}

const TeamRequestDetails = ({ request, hideApprovedRequests }: TeamRequestDetailsProps) => {
  const toast = useToast();
  const matchMutate = useMatchMutate();

  const deleteRequest = async () => {
    if (!request) {
      toast({
        status: 'error',
        title: 'Invalid delete reqeust',
        isClosable: true,
      });
      return;
    }

    try {
      await fetch('/api/team-requests/' + request.id, {
        method: 'DELETE',
      });
      await matchMutate(/\/api\/user/);
      toast({
        status: 'success',
        title: 'Successfully removed team request',
        isClosable: true,
      });
    } catch (error) {
      toast({
        status: 'error',
        title: 'Error deleting team request',
        description: ErrorMessages.DEFUALT,
        isClosable: true,
      });
    }
  };

  let icon = undefined;
  let color = 'gray.500';

  switch (request.approved) {
    case 'NOT_RESPONDED':
      icon = MdPending;
      break;
    case 'REJECTED':
      icon = MdClear;
      color = 'red.500';
      break;
    case 'ACCEPTED':
      if (hideApprovedRequests) return null;
      icon = MdCheck;
      color = 'green.500';
  }

  return (
    <ListItem>
      <ListIcon as={icon} color={color} height="22px" />
      <Text as="span">{request.user.name}</Text>{' '}
      <NextLink href={'mailto:' + request.user.email} passHref>
        <Link color="blue.200">({request.user.email})</Link>
      </NextLink>
      <Tooltip label="Cancel team request sent">
        <IconButton
          ml={3}
          size="sm"
          verticalAlign={'middle'}
          aria-label="Cancel team request"
          icon={<CloseIcon color="red.500" />}
          bg="transparent"
          _hover={{ bg: 'gray.600' }}
          onClick={deleteRequest}
        />
      </Tooltip>
    </ListItem>
  );
};

export default TeamRequestDetails;
