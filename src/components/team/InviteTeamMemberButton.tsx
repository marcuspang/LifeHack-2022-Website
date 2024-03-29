import {
  Button,
  ButtonProps,
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

interface InviteTeamMemberButtonProps extends ButtonProps {
  teamId: string;
}

const InviteTeamMemberButton = ({ teamId, ...props }: InviteTeamMemberButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate } = useSWRConfig();
  const emailRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    if (!emailRef.current || !emailRef.current.value) {
      toast({
        status: 'error',
        title: 'Please enter a valid email',
        isClosable: true,
      });
      return;
    }

    try {
      const result = await fetch('/api/team-requests', {
        method: 'POST',
        body: JSON.stringify({
          teamId,
          email: emailRef.current.value,
        }),
      });
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message);
      }
      await mutate('/api/user');
      toast({
        status: 'success',
        title: 'Successfully sent team request',
        isClosable: true,
      });
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          status: 'error',
          title: 'Error sending request',
          description: error.message,
          isClosable: true,
        });
      } else {
        toast({
          status: 'error',
          title: 'Error sending request',
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Button variant="theme" onClick={onOpen} {...props}>
        Send invite
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="theme.300">
          <ModalHeader>Send a team invite</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Input ref={emailRef} type="email" placeholder="Enter a valid email" />
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

export default InviteTeamMemberButton;
