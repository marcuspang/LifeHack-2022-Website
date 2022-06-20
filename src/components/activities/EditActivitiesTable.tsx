import { EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
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
import { Activities, Prisma } from '@prisma/client';
import Loader from 'components/common/Loader';
import useMatchMutate from 'hooks/useMatchMutate';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

const EditActivitiesTable = () => {
  const [skip, setSkip] = useState(0);
  const { data, mutate } = useSWR<{ activities: Activities[]; count: number }>(
    '/api/activities?skip=' + skip + '&take=10'
  );
  const matchMutate = useMatchMutate();
  const toast = useToast();
  const router = useRouter();

  if (!data) {
    return <Loader />;
  }

  const updateActivity = async (params: Prisma.ActivitiesUpdateInput) => {
    try {
      const result = await fetch('/api/activities/' + params.id, {
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
      await matchMutate(/^\/api\/teams/);
      toast({
        status: 'success',
        title: data.message,
        isClosable: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error updating activity',
          description: error.message,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error updating activity',
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
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Points
              </Th>
              <Th textAlign="center" isNumeric fontSize={['md', 'md', 'lg']}>
                Edit
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.activities.map((activity) => (
              <Tr
                key={activity.id}
                borderBottom="1px solid"
                borderColor="gray.600"
                transition="all 0.1s ease-in-out"
                _hover={{ bg: 'gray.700' }}
              >
                <Td textAlign="center">
                  <Editable
                    defaultValue={activity.name!}
                    maxW="fit-content"
                    mx="auto"
                    onSubmit={(name) => updateActivity({ id: activity.id, name })}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Td>
                <Td textAlign="center">
                  <NumberInput
                    step={1}
                    min={0}
                    defaultValue={activity.points}
                    maxW="100px"
                    mx="auto"
                    onBlur={(e) => updateActivity({ id: activity.id, points: +e.target.value })}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td textAlign="center">
                  <IconButton
                    aria-label="Edit team"
                    variant="theme"
                    size="sm"
                    onClick={() => router.push('/activities/' + activity.id)}
                    icon={<EditIcon />}
                  />
                </Td>
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

export default EditActivitiesTable;
