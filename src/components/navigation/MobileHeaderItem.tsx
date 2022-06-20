import { Flex, Link, Text } from '@chakra-ui/react';
import { NavItem } from 'constants/navItems';

interface MobileNavItemProps {
  navItem: NavItem;
}

const MobileHeaderItem = ({ navItem }: MobileNavItemProps) => {
  return (
    <Flex
      py={2}
      as={Link}
      href={navItem.route}
      justify="space-between"
      align="center"
      _hover={{
        textDecoration: 'none',
      }}
      onClick={navItem.onClick}
    >
      <Text fontWeight={500}>{navItem.name}</Text>
    </Flex>
  );
};
export default MobileHeaderItem;
