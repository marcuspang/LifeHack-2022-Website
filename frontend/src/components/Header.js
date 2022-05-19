import { Box, Button, Flex, Stack } from '@chakra-ui/react';

const Nav = () => {
  return (
    <>
      <Box bg={'theme.500'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
              <Button
                as={'a'}
                href={'/login'}
                fontSize={'sm'}
                fontWeight={400}
                bg={'theme.500'}
                _hover={{ bg: 'theme.400' }}
                _active={{
                  bg: 'theme.400',
                }}
                color={'white'}
              >
                Sign In
              </Button>
              <Button
                as={'a'}
                href={'/register'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'theme.300'}
                _hover={{ bg: 'theme.400' }}
                _active={{ bg: 'theme.400' }}
              >
                Sign Up
              </Button>
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

export default Nav;
