'use client';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <div className="Navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">CRUD-WEB </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  Parent
                </summary>
                <ul className="p-2 bg-base-100">
                  <li><Link href={'/'}> Home  </Link></li>
                  <li><Link href={'/addpost'}>Add Post </Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;