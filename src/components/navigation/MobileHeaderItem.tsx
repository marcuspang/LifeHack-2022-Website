import { Button, Link } from '@chakra-ui/react';
import { NavItem } from 'components/navigation/navItems';
import { useRouter } from 'next/router';

interface MobileNavItemProps {
  navItem: NavItem;
}

const MobileHeaderItem = ({ navItem }: MobileNavItemProps) => {
  const router = useRouter();
  return (
    <Button
      rounded="md"
      as={Link}
      href={navItem.route}
      _hover={{
        textDecoration: 'none',
      }}
      justifyContent="left"
      variant="header"
      color={navItem.color}
      isActive={navItem.route === router.route}
      leftIcon={navItem.leftIcon}
      onClick={navItem.onClick}
    >
      {navItem.name}
    </Button>
  );
};
export default MobileHeaderItem;
