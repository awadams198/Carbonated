// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {

  const sessionUser = useSelector((state) => state.session.user);

  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/sodas" className="navlinks">
          Sodas
        </NavLink>
        <NavLink to="/sodas/new" className="navlinks">
          {" "}
          New Sodas
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="navlinkm">
          Log In
        </NavLink>
        <NavLink to="/signup" className="navlinkm">
          Sign Up
        </NavLink>
        <NavLink to="/about" className="navlinkm">
          About Me
        </NavLink>
        
      </>
    );
  }

  return (
    <>
      <h1>CARBONATED</h1>
      <div id="navbar">
        <ul className="navbar-links">
            <NavLink exact to="/" className="navlinkm">
            Home
            </NavLink>
            {isLoaded && sessionLinks}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
