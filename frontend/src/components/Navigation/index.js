// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to="/sodas">Sodas</NavLink>
        <NavLink to="/sodas/new"> New Sodas</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className="navlink">
          Log In
        </NavLink>
        <NavLink to="/signup" className="navlink">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <>
      <h1>CARBONATED</h1>
      <div id="navbar">
        <ul className="navbar-links">
          <li>
            <NavLink exact to="/" className="navlink">
              Home
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
