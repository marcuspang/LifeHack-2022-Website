import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Activities, Prisma, User } from '@prisma/client';
import CUIAutoComplete, { Item } from 'components/common/CUIAutocomplete';
import useMatchMutate from 'hooks/useMatchMutate';
import { FormEventHandler, useEffect, useState } from 'react';
import useSWR from 'swr';

interface AddTeamToActivityButtonInterface {
  activityId: string;
}

interface ItemInterface extends Item {
  name: string;
  points: number;
}

interface UserDataInterface {
  users: (User & { activities: Activities[] })[];
  count: number;
}

const AddParticipantToActivityButton = ({ activityId }: AddTeamToActivityButtonInterface) => {
  const toast = useToast();
  const matchMutate = useMatchMutate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, mutate } = useSWR<UserDataInterface>(isOpen && '/api/users');
  const [pickerItems, setPickerItems] = useState<ItemInterface[]>([]);
  const [selectedItems, setSelectedItems] = useState<ItemInterface[]>([]);

  useEffect(() => {
    if (data && data.users.length) {
      setPickerItems(
        data.users.map((user) => ({
          label: user.email || '',
          name: user.name || '',
          points: user.points,
          value: user.id,
        }))
      );

      const selectedUsers: ItemInterface[] = [];
      data.users.forEach((user) => {
        user.activities.forEach((activity) => {
          if (activity.id === activityId) {
            selectedUsers.push({
              label: user.email || '',
              name: user.name || '',
              points: user.points,
              value: user.id,
            });
            return;
          }
        });
      });
      setSelectedItems(selectedUsers);
    }
  }, [activityId, data]);

  const handleSelectedItemsChange = async (selectedItems?: ItemInterface[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const result = await fetch('/api/activities/' + activityId, {
        method: 'PATCH',
        body: JSON.stringify({
          participants: {
            set: selectedItems.map((item) => ({
              id: item.value,
            })),
          },
        } as Prisma.ActivitiesUpdateInput),
      });
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message);
      }
      await mutate();
      await matchMutate(/\/api\/(team|users|participants|activities)/);
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
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent bg="theme.300">
            <ModalHeader>Add Participants to Activity</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {data ? (
                <CUIAutoComplete
                  label="Participants"
                  placeholder="Choose participants"
                  items={pickerItems}
                  selectedItems={selectedItems}
                  onSelectedItemsChange={(changes) =>
                    handleSelectedItemsChange(changes.selectedItems)
                  }
                  listStyleProps={{
                    bg: 'gray.800',
                    color: 'white',
                    maxHeight: '300px',
                    overflowY: 'auto',
                  }}
                  tagsStyleProps={{
                    maxHeight: '200px',
                    overflowY: 'auto',
                    spacing: 0,
                  }}
                  tagStyleProps={{
                    bg: 'gray.800',
                    color: 'white',
                    marginRight: '4px !important ',
                    marginBottom: '4px !important ',
                  }}
                  listItemStyleProps={{ bg: 'gray.700' }}
                  toggleButtonStyleProps={{
                    variant: 'theme',
                    marginInlineStart: '0 !important ',
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                  }}
                  inputStyleProps={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  highlightItemBg="gray.700"
                  disableCreateItem={true}
                />
              ) : (
                <Text>No participants</Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="facebook" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="theme" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
      <Button variant="theme" onClick={onOpen}>
        Add Participants
      </Button>
    </Box>
  );
};

export default AddParticipantToActivityButton;
