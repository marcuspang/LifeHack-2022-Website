import { Role } from '@prisma/client';
import { Session } from 'next-auth';

const isAdmin = (session: Session | null) =>
  session && session.user && session.user.email && session.user.role === Role.ADMIN;
export default isAdmin;
