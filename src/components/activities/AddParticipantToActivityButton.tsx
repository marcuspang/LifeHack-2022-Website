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
import { CUIAutoComplete, Item } from 'chakra-ui-autocomplete';
import { useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { EditActivitiesData } from './EditActivitiesCardContent';

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
  const { mutate: globalMutate } = useSWRConfig();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isValidating, mutate } = useSWR<UserDataInterface>(isOpen && '/api/users');
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
        await globalMutate(
          '/api/activities/' + activityId,
          async (data: EditActivitiesData) => {
            data.participants = selectedItems.map((item) => ({
              id: item.value,
              name: item.name,
              points: item.points,
              email: item.label,
            }));
            return data;
          },
          {
            revalidate: false,
          }
        );
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
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
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
                listStyleProps={{ bg: 'gray.800', color: 'white' }}
                tagStyleProps={{ bg: 'gray.800', color: 'white' }}
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
      </Modal>
      <Button variant="theme" onClick={onOpen}>
        Add Participants
      </Button>
    </Box>
  );
};

export default AddParticipantToActivityButton;
