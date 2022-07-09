import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
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
import { Team } from '@prisma/client';
import Loader from 'components/common/Loader';
import TableNavigation from 'components/common/TableNavigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface LeaderboardTeam extends Team {
  rank: number;
}

interface LeaderboardTeams {
  teams: LeaderboardTeam[];
  count: number;
}

interface FormInputs {
  name: string;
}

const LeaderboardTable = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({});
  const [skip, setSkip] = useState(0);
  const { data, mutate } = useSWR<LeaderboardTeams>(
    '/api/teams/leaderboard?skip=' +
      skip +
      '&take=10&' +
      new URLSearchParams(getValues() as Record<string, any>).toString()
  );
  const toast = useToast();

  if (!data) {
    return <Loader />;
  }

  const onSubmit: SubmitHandler<FormInputs> = async (input) => {
    await mutate(
      async (teams) => {
        try {
          const newTeams = (await fetch(
            '/api/teams/leaderboard?skip=0&take=10&' +
              new URLSearchParams(input as Record<string, any>).toString()
          ).then((data) => data.json())) as LeaderboardTeams;
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
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Search for your team below!
          </Text>
          <Stack
            justifyContent={'flex-start'}
            direction={['column', 'row', 'row']}
            alignItems={['flex-start', 'center', 'center']}
            spacing={3}
            pb={8}
          >
            <FormControl width="auto">
              <Input id="name" placeholder="Name" type="text" maxW="200px" {...register('name')} />
              {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
            </FormControl>
            <Button type="submit" variant="theme">
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
      <TableContainer>
        <Table variant="unstyled" border="1px solid" borderColor="gray.600">
          <Thead>
            <Tr borderBottom="1px solid" borderColor="gray.600">
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Rank
              </Th>
              <Th textAlign="center" fontSize={['md', 'md', 'lg']}>
                Team
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Points
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
                <Td textAlign="center" color="gray.400">
                  {team.rank}
                </Td>
                <Td textAlign="center">{team.name}</Td>
                <Td textAlign="center">{team.points}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TableNavigation count={data.count} skip={skip} setSkip={setSkip} />
    </>
  );
};

export default LeaderboardTable;
