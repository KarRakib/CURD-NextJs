'use client';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'}> Home</Link> </li>
      <li><Link href={'/addpost'}>Add Post </Link> </li>
      
    </ul>
  </div>
</div>
  );
};

export default NavBar;