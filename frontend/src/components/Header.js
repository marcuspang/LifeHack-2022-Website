import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(user, isAuthenticated);
  return (
    <>
      <Box bg="theme.500" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>Logo</Box>
          <Flex alignItems="center">
            <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
              {!isAuthenticated ? (
                <>
                  <RegisterButton />
                  <LoginButton />
                </>
              ) : (
                <LogoutButton />
              )}
            </Stack>
            {/* Mobile */}
            {/* <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack> */}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
