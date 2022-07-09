import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Stack,
  Box,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { MdLogout } from 'react-icons/md';
import LoginButton from '../auth/LoginButton';

const DesktopAuthItems = () => {
  const { data, status } = useSession();
  const [hover, setHover] = useState(false);

  if (status === 'authenticated') {
    return (
      <Box height="fit-content">
        <Menu autoSelect={false} isOpen={hover}>
          <MenuButton
            as={Button}
            onMouseOver={() => setHover(true)}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            <Avatar src={data.user.image} width="40px" height="40px" />
          </MenuButton>
          <MenuList
            bg="theme.300"
            shadow="3xl"
            p={4}
            width="sm"
            border="none"
            onMouseLeave={() => setHover(false)}
          >
            <Stack direction={'row'} px={2} py={2} align="center">
              <Avatar src={data.user.image} width="55px" height="55px" name={'User menu'} />
              <Box wordBreak={'break-all'}>
                <Text px={2} fontWeight={600}>
                  {data.user.name}
                </Text>
                <Text px={2}>{data.user.email}</Text>
              </Box>
            </Stack>
            <MenuDivider color="gray.500" />
            <MenuItem
              _hover={{ bg: 'theme.400' }}
              _focus={{ bg: 'theme.400' }}
              _active={{ bg: 'theme.400' }}
              rounded="lg"
              py={2}
              icon={<MdLogout />}
              onClick={() => signOut()}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  }
  return <LoginButton />;
};

export default DesktopAuthItems;
