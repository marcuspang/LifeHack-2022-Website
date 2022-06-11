import { useSession } from 'next-auth/react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import RegisterButton from '../auth/RegisterButton';

const DesktopAuthItems = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return <LogoutButton />;
  }
  return (
    <>
      <RegisterButton />
      <LoginButton />
    </>
  );
};

export default DesktopAuthItems;
