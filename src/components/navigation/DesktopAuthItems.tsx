import { useSession } from 'next-auth/react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';

const DesktopAuthItems = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return <LogoutButton />;
  }
  return <LoginButton />;
};

export default DesktopAuthItems;
