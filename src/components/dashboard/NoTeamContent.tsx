import {
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { FormEventHandler, useRef } from 'react';
import { useSWRConfig } from 'swr';
import NoTeamPendingRequests from './NoTeamPendingRequests';

const NoTeamContent = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate } = useSWRConfig();
  const teamNameRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!teamNameRef.current || !teamNameRef.current.value) {
      toast({
        status: 'error',
        title: 'Please enter a valid name',
      });
      return;
    }

    try {
      const result = await fetch('api/teams', {
        method: 'POST',
        body: JSON.stringify({
          name: teamNameRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message);
      }
      await mutate('api/users/team');
      toast({
        status: 'success',
        title: 'Team ' + data.name + ' successfully created',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error creating team',
          description: error.message,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error creating team',
        });
      }
    }
  };

  return (
    <>
      <Heading as="h3" size="md" pb={6}>
        You&apos;re not in any team currently.
      </Heading>
      <Button onClick={onOpen} variant="theme">
        Click here to create a team
      </Button>
      <Heading as="h3" size="md" pb={6} pt={8}>
        Pending team requests
      </Heading>
      <NoTeamPendingRequests />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="theme.300">
          <ModalHeader>Create Team</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Input ref={teamNameRef} placeholder="Enter your team's name" />
            </ModalBody>
            <ModalFooter>
              <Button variant="theme" onClick={onClose} mr={3}>
                Close
              </Button>
              <Button variant="theme" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NoTeamContent;
