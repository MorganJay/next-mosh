import Link from 'next/link';
import UserTable from './UserTable';
import { Suspense } from 'react';

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        Add User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
