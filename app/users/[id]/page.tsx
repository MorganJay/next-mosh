interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetail Page{id}</div>;
};

export default UserDetailPage;
