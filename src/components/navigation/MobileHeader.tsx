import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { Role } from '@prisma/client';
import { navItems } from 'components/navigation/navItems';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import MobileAuthItems from './MobileAuthItems';
import MobileHeaderItem from './MobileHeaderItem';

interface MobileHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileHeader = ({ isOpen, onClose }: MobileHeaderProps) => {
  const { data, status } = useSession();
  const router = useRouter();

  return (
    <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="theme.400">
        <DrawerHeader>
          <Heading
            fontSize="lg"
            cursor="pointer"
            onClick={() => router.push('/')}
            px={3}
            py={3}
            rounded="md"
          >
            LifeHack 2022
          </Heading>
        </DrawerHeader>
        <DrawerBody pt={0}>
          <Stack>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileHeader;
