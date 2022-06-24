import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Link, ListIcon, ListItem, Text, Tooltip, useToast } from '@chakra-ui/react';
import { Response, TeamRequest, User } from '@prisma/client';
import { ErrorMessages } from 'constants/errors';
import NextLink from 'next/link';
import { MdCheckCircle, MdClear, MdPending } from 'react-icons/md';
import { useSWRConfig } from 'swr';

interface TeamMemberDetailsProps {
  user: User;
  request?: TeamRequest;
}

const TeamMemberDetails = ({ user, request }: TeamMemberDetailsProps) => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
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
      await mutate('/api/user/team');
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

  if (request) {
    if (request.approved === Response.ACCEPTED) {
      return null;
    }

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
    }

    return (
      <ListItem key={user.email}>
        <ListIcon as={icon} color={color} height="22px" />
        <Text as="span">{user.name}</Text>{' '}
        <NextLink href={'mailto:' + user.email} passHref>
          <Link color="blue.200">({user.email})</Link>
        </NextLink>
        <Tooltip label="Cancel team request sent">
          <IconButton
            ml={3}
            size="sm"
            verticalAlign={'middle'}
            aria-label="Cancel team request"
            icon={<CloseIcon />}
            bg="transparent"
            _hover={{ bg: 'gray.600' }}
            onClick={deleteRequest}
          />
        </Tooltip>
      </ListItem>
    );
  }

  return (
    <Tooltip label={user.name + ' has earned ' + user.points + ' points'} placement="auto-start">
      <ListItem key={user.email} width="auto">
        <ListIcon as={MdCheckCircle} color="green.500" height="22px" />
        <Text as="span">{user.name}</Text>{' '}
        <NextLink href={'mailto:' + user.email} passHref>
          <Link color="blue.200">({user.email})</Link>
        </NextLink>
      </ListItem>
    </Tooltip>
  );
};

export default TeamMemberDetails;
