import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" bg="theme.400">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        borderBottom={isOpen ? '1px solid' : 'none'}
        px={6}
      >
        <DesktopHeader />
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant="theme"
          aria-label="Toggle Navigation"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileHeader />
      </Collapse>
    </Box>
  );
};

export default Header;
