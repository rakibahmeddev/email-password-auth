import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base ml-6 text-right hover:text-green-400 ${
            isActive ? 'text-green-400 ' : ''
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          `text-base ml-6 text-right hover:text-green-400 ${
            isActive ? 'text-green-400 ' : ''
          }`
        }
      >
        Login
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          `text-base ml-6 text-right hover:text-green-400 ${
            isActive ? 'text-green-400 ' : ''
          }`
        }
      >
        Register
      </NavLink>

      <NavLink
        to="/register2"
        className={({ isActive }) =>
          `text-base ml-6 text-right hover:text-green-400 ${
            isActive ? 'text-green-400' : ''
          }`
        }
      >
        Register 2
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 border border-green-400 rounded-lg mt-6 sm:max-w-3xl mx-auto">
      <div className="navbar-start">
        <Link to="/" className="text-xl ml-2 font-bold">
          Emai Pass Auth
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* mobile menu start  */}
      <div className="navbar-end lg:hidden relative">
        <div className="dropdown dropdown-end ">
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
            className="menu menu-sm dropdown-content bg-green-50 rounded  z-1 mt-3 mr-[-9px] w-50 pl-4 pr-6 "
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
