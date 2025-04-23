import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  if (id > 10) notFound();
  
  return <div>UserDetail Page{id}</div>;
};

export default UserDetailPage;
