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
import { Activities, Prisma, Team } from '@prisma/client';
import { CUIAutoComplete, Item } from 'chakra-ui-autocomplete';
import { useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

interface AddTeamToActivityButtonInterface {
  activityId: string;
}

const AddTeamToActivityButton = ({ activityId }: AddTeamToActivityButtonInterface) => {
  const toast = useToast();
  const { mutate } = useSWRConfig();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isValidating } = useSWR<{
    teams: (Team & { activities: Activities[] })[];
    count: number;
  }>(isOpen && '/api/teams');
  const [pickerItems, setPickerItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  useEffect(() => {
    if (data && data.teams.length) {
      setPickerItems(data.teams.map((team) => ({ label: team.name, value: team.id })));

      const selectedTeams: Item[] = [];
      data.teams.forEach((team) => {
        team.activities.forEach((activity) => {
          if (activity.id === activityId) {
            selectedTeams.push({ label: team.name, value: team.id });
            return;
          }
        });
      });
      setSelectedItems(selectedTeams);
    }
  }, [isValidating]);

  const handleSelectedItemsChange = async (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      try {
        const result = await fetch('/api/activities/' + activityId, {
          method: 'PATCH',
          body: JSON.stringify({
            teams: {
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
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="theme.300">
          <ModalHeader>Add Teams to Activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {data ? (
              <CUIAutoComplete
                label="Teams"
                placeholder="Choose teams"
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
              <Text>No teams found</Text>
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
        Add Team
      </Button>
    </Box>
  );
};

export default AddTeamToActivityButton;
