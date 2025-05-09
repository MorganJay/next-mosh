import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? user => user.email : user => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <tr key={user.id} className="relative">
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link
                href={`/users/${user.id}`}
                className="absolute top-0 left-0 w-full h-full"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
