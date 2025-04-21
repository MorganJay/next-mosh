interface Props {
  params: Promise<{
    id: number;
  }>;
}

const UserDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  return <div>UserDetail Page{id}</div>;
};

export default UserDetailPage;
