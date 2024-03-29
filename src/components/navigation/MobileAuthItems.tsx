import { signOut, useSession } from 'next-auth/react';
import { MdLogin, MdLogout } from 'react-icons/md';
import MobileHeaderItem from './MobileHeaderItem';

const MobileAuthItems = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <MobileHeaderItem
        navItem={{
          name: 'Logout',
          requireAdmin: false,
          leftIcon: <MdLogout />,
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
        leftIcon: <MdLogin />,
        requireAdmin: false,
        requireUser: false,
        route: '/login',
      }}
    />
  );
};

export default MobileAuthItems;
