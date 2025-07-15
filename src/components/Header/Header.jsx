import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
      <NavLink to="/" className="text-base ml-6 text-right">
        Home
      </NavLink>
      <NavLink to="/login" className="text-base ml-6 text-right">
        Login
      </NavLink>
      <NavLink to="/register" className="text-base ml-6 text-right">
        Register
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Emai Pass Auth
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* mobile menu start  */}
      <div className="navbar-end lg:hidden relative">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3 w-50 pl-4 pr-6 "
          >
            {links}
          </ul>
        </div>
      </div>
      {/* mobile menu end  */}
    </div>
  );
};

export default Header;
