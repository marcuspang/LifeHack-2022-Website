import { Heading, Link, Stack } from '@chakra-ui/react';
import { Role } from '@prisma/client';
import { navItems } from 'components/navigation/navItems';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import DesktopAuthItems from './DesktopAuthItems';
import DesktopHeaderItem from './DesktopHeaderItem';

const DesktopHeader = () => {
  const { data, status } = useSession();
  const router = useRouter();
  return (
    <>
      <NextLink href="/" passHref>
        <Heading
          as={Link}
          fontSize="lg"
          cursor="pointer"
          _hover={{
            textDecoration: 'none',
          }}
        >
          LifeHack 2022
        </Heading>
      </NextLink>
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
