/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Appointment", link: "/appintment" },
    { name: "Reviews", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Login", link: "/login" },
    { name: "Registaion", link: "/registaion" },
  ];
  return (
    <div>
      <div className="navbar bg-base-100">
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
        <div className="navbar-right flex ml-auto justify-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {Links.map((li) => {
              return (
                <li>
                  {" "}
                  <Link to={li.link}>{li.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
