import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </nav>
  );
};

export default NavBar;
