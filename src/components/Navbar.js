import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = {
    color: "blue",
    fontWeight: "bold",
    textDecoration: "underline",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <nav style={navLinkStyle}>
      <NavLink to="/" activeStyle={navLinkStyle} exact>
        Index
      </NavLink>
      <NavLink to="/home" activeStyle={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={navLinkStyle}>
        About
      </NavLink>
      <NavLink to="/User" activeStyle={navLinkStyle}>
        User
      </NavLink>
    </nav>
  );
}

export default Navbar;
