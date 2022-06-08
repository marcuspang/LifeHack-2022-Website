import React from 'react';
import { RegisterCard } from '../components/auth/RegisterCard';

export interface FormData {
  email: string;
  password: string;
}

const Register = () => {
  return <RegisterCard></RegisterCard>;
};

export default Register;
