import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const EditTeam = () => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && data.user.role !== Role.ADMIN) {
      router.push('/');
    }

    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  return <div>1</div>;
};

export default EditTeam;
