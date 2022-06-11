import { Stack } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import MobileAuthItems from './MobileAuthItems';
import MobileHeaderItem from './MobileHeaderItem';
import { navItems } from '../../../constants/navItems';

const MobileHeader = () => {
  const { data, status } = useSession();
  return (
    <Stack py={2} px={6} display={{ md: 'none' }}>
      {navItems.map((nav, index) => {
        if (nav.requireAdmin && (!data || data.user.role !== Role.ADMIN)) {
          return null;
        }
        if (nav.requireUser && (status !== 'authenticated' || !data)) {
          return null;
        }
        return <MobileHeaderItem key={index} navItem={nav} />;
      })}
      <MobileAuthItems />
    </Stack>
  );
};

export default MobileHeader;
