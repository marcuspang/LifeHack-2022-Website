import { signOut, useSession } from 'next-auth/react';
import MobileHeaderItem from './MobileHeaderItem';

const MobileAuthItems = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <MobileHeaderItem
        navItem={{
          name: 'Logout',
          requireAdmin: false,
          requireUser: true,
          route: '/logout',
          onClick: () => signOut(),
        }}
      />
    );
  }
  return (
    <MobileHeaderItem
      navItem={{
        name: 'Sign In',
        requireAdmin: false,
        requireUser: false,
        route: '/login',
      }}
    />
  );
};

export default MobileAuthItems;
