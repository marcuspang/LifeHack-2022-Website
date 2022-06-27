import { EditIcon } from '@chakra-ui/icons';
import {
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
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
import { Prisma, Role, Team } from '@prisma/client';
import Loader from 'components/common/Loader';
import TableNavigation from 'components/common/TableNavigation';
import useMatchMutate from 'hooks/useMatchMutate';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdCheckCircle, MdClear } from 'react-icons/md';
import useSWR from 'swr';

interface EditTeamsInterface {
  teams: (Team & { _count: { users: number; teamRequests: number } })[];
  count: number;
}

const EditTeamsTable = () => {
  const [skip, setSkip] = useState(0);
  const [query, setQuery] = useState('');

  const { data: userData, status } = useSession();
  const { data, isValidating } = useSWR<EditTeamsInterface>(
    '/api/teams?skip=' + skip + '&take=10&query=' + query
  );
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

  const updateTeam = async (params: Prisma.TeamUpdateInput) => {
    try {
      const result = await fetch('/api/teams/' + params.id, {
        method: 'PATCH',
        body: JSON.stringify({
          ...params,
        }),
      });
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message);
      }
      await matchMutate(/\/api\/team/);
      toast({
        status: 'success',
        title: data.message,
        isClosable: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error updating team',
          description: error.message,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error updating team',
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Stack justifyContent={'flex-start'} direction={'row'} spacing={6}>
        {/* <FormControl mb={8} width="auto">
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" maxW="200px" />
        </FormControl> */}
        <FormControl mb={8} width="auto">
          <FormLabel htmlFor="name">Name (NOT WORKING YET)</FormLabel>
          <Input
            id="name"
            type="text"
            maxW="200px"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FormControl>
      </Stack>
      <TableContainer width="100%">
        <Table variant="unstyled" border="1px solid" borderColor="gray.600">
          <Thead>
            <Tr borderBottom="1px solid" borderColor="gray.600">
              <Th textAlign="center" fontSize={['md', 'md', 'lg']}>
                Name
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Points
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                No. of Members
              </Th>
              <Th textAlign="center" fontSize={['md', 'md', 'lg']}>
                Verified?
              </Th>
              <Th textAlign="center" fontSize={['md', 'md', 'lg']}>
                Edit
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.teams.map((team) => (
              <Tr
                key={team.id}
                borderBottom="1px solid"
                borderColor="gray.600"
                transition="all 0.1s ease-in-out"
                _hover={{ bg: 'gray.700' }}
              >
                <Td textAlign="center">
                  <Editable
                    defaultValue={team.name}
                    maxW="fit-content"
                    mx="auto"
                    onSubmit={(name) => team.name !== name && updateTeam({ id: team.id, name })}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Td>
                <Td textAlign="center">
                  <NumberInput
                    step={1}
                    min={0}
                    defaultValue={team.points}
                    maxW="100px"
                    mx="auto"
                    onBlur={(e) => {
                      const difference = +e.target.value - team.points;
                      if (difference !== 0) {
                        updateTeam({
                          id: team.id,
                          points: {
                            increment: difference,
                          },
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
                <Td textAlign="center">{team._count.users}</Td>
                <Td textAlign="center">
                  <Icon
                    as={team.verified ? MdCheckCircle : MdClear}
                    color={team.verified ? 'green.500' : 'red.500'}
                    onClick={() => updateTeam({ id: team.id, verified: !team.verified })}
                    cursor="pointer"
                    transition="0.2s all ease-in-out"
                    _hover={{
                      opacity: 0.7,
                    }}
                    width="30px"
                    height="30px"
                  />
                </Td>
                <Td textAlign="center">
                  <IconButton
                    aria-label="Edit team"
                    variant="theme"
                    size="sm"
                    onClick={() => router.push('/teams/' + team.id)}
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

export default EditTeamsTable;
