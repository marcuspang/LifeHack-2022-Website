import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { Prisma, Role, Team, User } from '@prisma/client';
import Loader from 'components/common/Loader';
import TableNavigation from 'components/common/TableNavigation';
import useMatchMutate from 'hooks/useMatchMutate';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

const EditParticipantsTable = () => {
  const [skip, setSkip] = useState(0);
  const { data: userData, status } = useSession();
  const { data, isValidating, mutate } = useSWR<{
    users: (User & { team: Team | null })[];
    count: number;
  }>('/api/users?skip=' + skip + '&take=10');
  const matchMutate = useMatchMutate();
  const toast = useToast();
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

  if (!data) {
    return <Text>No teams found</Text>;
  }

  const updateUser = async (params: Prisma.UserUpdateInput & { teamId: string | null }) => {
    try {
      const result = await fetch('/api/users/' + params.id, {
        method: 'PATCH',
        body: JSON.stringify({
          ...params,
        }),
      });
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message);
      }
      await mutate();
      await matchMutate(/^\/api\/(team|user)/);

      toast({
        status: 'success',
        title: data.message,
        isClosable: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error updating user',
          description: error.message,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error updating user',
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <TableContainer width="100%">
        <Table variant="unstyled" border="1px solid" borderColor="gray.600">
          <Thead>
            <Tr borderBottom="1px solid" borderColor="gray.600">
              <Th textAlign="center" fontSize={['md', 'md', 'lg']}>
                Name
              </Th>
              <Th textAlign="center" fontSize={['md', 'md', 'lg']}>
                Email
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Points
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Team
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Edit
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.users.map((user) => (
              <Tr
                key={user.id}
                borderBottom="1px solid"
                borderColor="gray.600"
                transition="all 0.1s ease-in-out"
                _hover={{ bg: 'gray.700' }}
              >
                <Td textAlign="center">
                  <Editable
                    defaultValue={user.name || ''}
                    maxW="fit-content"
                    mx="auto"
                    onSubmit={(name) =>
                      user.name !== name && updateUser({ id: user.id, name, teamId: user.teamId })
                    }
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Td>
                <Td textAlign="center">{user.email}</Td>
                <Td textAlign="center">
                  <NumberInput
                    step={1}
                    min={0}
                    defaultValue={user.points}
                    maxW="100px"
                    mx="auto"
                    onBlur={(e) => {
                      const difference = +e.target.value - user.points;
                      if (difference !== 0) {
                        updateUser({
                          id: user.id,
                          points: { increment: difference },
                          teamId: user.teamId,
                        });
                      }
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td textAlign="center">
                  {user.team?.name && (
                    <Button variant="theme" onClick={() => router.push('/teams/' + user.team?.id)}>
                      {user.team?.name}
                    </Button>
                  )}
                </Td>
                <Td textAlign="center">
                  <IconButton
                    aria-label="Edit team"
                    variant="theme"
                    size="sm"
                    onClick={() => router.push('/users/' + user.id)}
                    icon={<EditIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TableNavigation count={data.count} skip={skip} setSkip={setSkip} />
    </>
  );
};

export default EditParticipantsTable;
