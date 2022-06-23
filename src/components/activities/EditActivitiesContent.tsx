import { Role } from '@prisma/client';
import Loader from 'components/common/Loader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import AddActivityButton from './AddActivityButton';
import EditActivitiesTable from './EditActivitiesTable';

const EditActivitiesContent = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <Loader />;
  }

  if (
    (status === 'authenticated' && data.user.role !== Role.ADMIN) ||
    status === 'unauthenticated'
  ) {
    router.push('/');
    return <Loader />;
  }
  return (
    <>
      <AddActivityButton />
      <EditActivitiesTable />
    </>
  );
};

export default EditActivitiesContent;
