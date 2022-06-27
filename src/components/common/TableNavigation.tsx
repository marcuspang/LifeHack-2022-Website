import { Flex, Button } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface TableNavigationProps {
  count: number;
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
}

const TableNavigation = ({ count, skip, setSkip }: TableNavigationProps) => {
  return (
    <Flex justifyContent="space-between" pt={6}>
      <Button variant="theme" isDisabled={skip <= 0} onClick={() => setSkip((prev) => prev - 10)}>
        Prev
      </Button>
      <Button
        variant="theme"
        isDisabled={count <= skip + 10}
        onClick={() => setSkip((prev) => prev + 10)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default TableNavigation;
