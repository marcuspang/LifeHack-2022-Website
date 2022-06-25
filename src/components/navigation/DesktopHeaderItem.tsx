import { Button } from '@chakra-ui/react';
import { NavItem } from 'components/navigation/navItems';
import { useRouter } from 'next/router';

interface DesktopHeaderItemProps {
  navItem: NavItem;
}

const DesktopHeaderItem = ({ navItem }: DesktopHeaderItemProps) => {
  const router = useRouter();
  return (
    <Button
      colorScheme={navItem.colorScheme}
      onClick={() => router.push(navItem.route)}
      variant={navItem.variant}
      isActive={router.route === navItem.route}
    >
      {navItem.name}
    </Button>
  );
};

export default DesktopHeaderItem;
