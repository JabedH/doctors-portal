import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const MenuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {/* <li>
        <Link to="/reviews">Reviews</Link>
      </li> */}
      {/* <li>
        <Link to="/contact">ContactUs</Link>
      </li> */}
      <li>{user ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
      <li>
        {user ? (
          <Link onClick={handleLogout} to="">
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {MenuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost hover:bg-[#0FCFEC] hover:text-white normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 gap-5 ">{MenuItems}</ul>
      </div>
      <div className="navbar-end  ">
        <label
          tabIndex="1"
          for="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
