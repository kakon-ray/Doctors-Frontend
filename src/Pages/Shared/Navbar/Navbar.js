/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Appointment", link: "/appintment" },
    { name: "Reviews", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  return (
    <div>
      <div className="navbar bg-base-100 uppercase text-sm">
        <div>
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links.map((li) => {
                return (
                  <li>
                    <Link to={li.link}>{li.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doctors</a>
        </div>
        <div className="navbar-right flex ml-auto justify-end hidden lg:flex mr-12">
          <ul className="menu menu-horizontal p-0">
            {Links.map((li) => {
              return (
                <li className="mx-2">
                  {" "}
                  <Link to={li.link}>{li.name}</Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-6">
            {user ? (
              <button
                className="btn btn-ghost cursor-pointer"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">Login </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
