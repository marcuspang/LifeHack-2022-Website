import { Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Team } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useState } from 'react';
import useSWR from 'swr';

const LeaderboardTable = () => {
  const [skip, setSkip] = useState(0);
  const { data } = useSWR<{ teams: Team[]; count: number }>('/api/teams?skip=' + skip + '&take=10');

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <TableContainer>
        <Table variant="unstyled" border="1px solid" borderColor="gray.600">
          <Thead>
            <Tr borderBottom="1px solid" borderColor="gray.600">
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
                <Td textAlign="center">{team.name}</Td>
                <Td textAlign="center">{team.points}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="space-between" pt={6}>
        <Button variant="theme" isDisabled={skip <= 0} onClick={() => setSkip((prev) => prev - 10)}>
          Prev
        </Button>
        <Button
          variant="theme"
          isDisabled={data.count <= skip + 10}
          onClick={() => setSkip((prev) => prev + 10)}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default LeaderboardTable;
