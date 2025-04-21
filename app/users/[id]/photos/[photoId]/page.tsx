interface Props {
  params: Promise<{
    id: number;
    photoId: number;
  }>;
}

const UserPhotoPage = async ({ params }: Props) => {
  const { id, photoId } = await params;
  return (
    <div>
      UserPhotoPage {id} {photoId}
    </div>
  );
};

export default UserPhotoPage;
