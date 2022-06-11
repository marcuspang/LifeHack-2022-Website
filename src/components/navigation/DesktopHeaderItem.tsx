import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NavItem } from './navItems';

interface DesktopHeaderItemProps {
  navItem: NavItem;
}

const DesktopHeaderItem = ({ navItem }: DesktopHeaderItemProps) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(navItem.route)} variant={navItem.variant}>
      {navItem.name}
    </Button>
  );
};

export default DesktopHeaderItem;
