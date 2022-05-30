import { Button } from '@chakra-ui/react';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { firebaseApp } from '../../firebase';

const auth = getAuth(firebaseApp);

const logout = () => {
  signOut(auth);
};

const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        logout();
      }}
      variant="theme"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
