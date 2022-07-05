import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormErrorMessage,
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
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdCheckCircle, MdClear } from 'react-icons/md';
import useSWR from 'swr';

interface EditTeamsInterface {
  teams: (Team & { _count: { users: number; teamRequests: number } })[];
  count: number;
}

interface FormInputs {
  name: string;
  verified: boolean;
}

const EditTeamsTable = () => {
  const [skip, setSkip] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const { data: userData, status } = useSession();
  const { data, mutate, isValidating } = useSWR<EditTeamsInterface>(
    '/api/teams?skip=' + skip + '&take=10&verified=false'
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
  const onSubmit: SubmitHandler<FormInputs> = async (input) => {
    await mutate(
      async (teams) => {
        try {
          const newTeams = (await fetch(
            '/api/teams?skip=0&take=10&' +
              new URLSearchParams(input as Record<string, any>).toString()
          ).then((data) => data.json())) as EditTeamsInterface;
          return { ...data, teams: newTeams.teams };
        } catch (error) {
          if (error instanceof Error) {
            toast({
              status: 'error',
              title: 'Error searching teams',
              description: error.message,
              isClosable: true,
            });
          } else {
            toast({
              status: 'error',
              title: 'Error searching teams',
              description: JSON.stringify(error),
              isClosable: true,
            });
          }
        }
      },
      { populateCache: true, rollbackOnError: false, revalidate: false }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Text fontSize="lg" fontWeight="bold">
            Search fields
          </Text>
          <Stack
            justifyContent={'flex-start'}
            direction={'row'}
            spacing={6}
            pb={8}
            alignItems="center"
          >
            <FormControl width="auto">
              <Input id="name" placeholder="Name" type="text" maxW="200px" {...register('name')} />
              {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
            </FormControl>
            <FormControl width="auto">
              <Checkbox {...register('verified')}>Verified?</Checkbox>
            </FormControl>
            <Button type="submit" variant="theme">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
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
            {data.teams.length
              ? data.teams.map((team) => (
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
                ))
              : null}
          </Tbody>
        </Table>
      </TableContainer>
      <TableNavigation count={data.count} skip={skip} setSkip={setSkip} />
    </>
  );
};

export default EditTeamsTable;
