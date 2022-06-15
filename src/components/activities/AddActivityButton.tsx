import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';

const AddActivityButton = () => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<{ name: string; points: number }>();

  const onSubmit = async (params: { points: number; name: string }) => {
    try {
      const result = await fetch('/api/activities/', {
        method: 'POST',
        body: JSON.stringify({
          ...params,
        }),
      });
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message);
      }
      await mutate('/api/activities?skip=0&take=10');
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="theme.300">
          <ModalHeader>Add Activity</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  placeholder="Enter name"
                  {...register('name', {
                    required: 'This is required',
                  })}
                />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.points} mt={3}>
                <FormLabel htmlFor="points">Points</FormLabel>
                <NumberInput step={1} min={0} defaultValue={0}>
                  <NumberInputField {...register('points', { required: 'This is required' })} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="facebook" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="theme" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Flex justifyContent="flex-end" mb={5}>
        <Button variant="theme" onClick={onOpen}>
          Add Activitiy
        </Button>
      </Flex>
    </>
  );
};

export default AddActivityButton;
