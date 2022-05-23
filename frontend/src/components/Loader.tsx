import { Center, Spinner, SpinnerProps } from '@chakra-ui/react';
import React from 'react';

const Loader = (props: SpinnerProps) => {
  return (
    <Center>
      <Spinner {...props} />
    </Center>
  );
};

export default Loader;
