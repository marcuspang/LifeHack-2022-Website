import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
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
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { Prisma, Team } from '@prisma/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdCheckCircle, MdClear } from 'react-icons/md';
import useSWR from 'swr';
import Loader from '../common/Loader';

const EditTeamsTable = () => {
  const [skip, setSkip] = useState(0);
  const { data, mutate } = useSWR<{
    teams: (Team & { _count: { users: number; teamRequests: number } })[];
    count: number;
  }>('/api/teams?skip=' + skip + '&take=10');
  const toast = useToast();
  const router = useRouter();

  if (!data) {
    return <Loader />;
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
      await mutate();
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
      <TableContainer width={'100%'}>
        <Table variant={'unstyled'} border="1px solid" borderColor="gray.600">
          <Thead>
            <Tr borderBottom="1px solid" borderColor="gray.600">
              <Th textAlign={'center'} fontSize={['md', 'md', 'lg']}>
                Name
              </Th>
              <Th textAlign={'center'} isNumeric fontSize={['md', 'md', 'lg']}>
                Points
              </Th>
              <Th textAlign={'center'} isNumeric fontSize={['md', 'md', 'lg']}>
                No. of Members
              </Th>
              <Th textAlign={'center'} fontSize={['md', 'md', 'lg']}>
                Verified?
              </Th>
              <Th textAlign={'center'} fontSize={['md', 'md', 'lg']}>
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
                transition={'all 0.1s ease-in-out'}
                _hover={{ bg: 'gray.700' }}
              >
                <Td textAlign={'center'}>
                  <Editable
                    defaultValue={team.name}
                    maxW="fit-content"
                    mx="auto"
                    onSubmit={(name) => updateTeam({ id: team.id, name })}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Td>
                <Td textAlign={'center'}>
                  <NumberInput
                    step={1}
                    min={0}
                    defaultValue={team.points}
                    maxW="100px"
                    mx="auto"
                    onBlur={(e) => updateTeam({ id: team.id, points: +e.target.value })}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td textAlign={'center'}>{team._count.users}</Td>
                <Td textAlign={'center'}>
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
                <Td textAlign={'center'}>
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
      <Flex justifyContent="space-between" pt={6}>
        <Button
          variant={'theme'}
          isDisabled={skip <= 0}
          onClick={() => setSkip((prev) => prev - 10)}
        >
          Prev
        </Button>
        <Button
          variant={'theme'}
          isDisabled={data.count <= skip + 10}
          onClick={() => setSkip((prev) => prev + 10)}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default EditTeamsTable;
