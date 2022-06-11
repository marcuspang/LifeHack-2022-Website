import { Heading, Stack } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import DesktopAuthItems from './DesktopAuthItems';
import DesktopHeaderItem from './DesktopHeaderItem';
import { navItems } from './navItems';

const DesktopHeader = () => {
  const { data, status } = useSession();
  const router = useRouter();
  return (
    <>
      <Heading fontSize="lg " cursor="pointer" onClick={() => router.push('/')}>
        LifeHack 2022
      </Heading>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify="flex-end"
        direction="row"
        spacing={6}
        display={{ base: 'none', md: 'flex' }}
      >
        {navItems.map((nav, index) => {
          if (nav.requireAdmin && (!data || data.user.role !== Role.ADMIN)) {
            return null;
          }
          if (nav.requireUser && (status !== 'authenticated' || !data)) {
            return null;
          }
          return <DesktopHeaderItem key={index} navItem={nav} />;
        })}
        <DesktopAuthItems />
      </Stack>
    </>
  );
};

export default DesktopHeader;
