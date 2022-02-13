import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

let NavBar = (props) => {
  return (
    <div className="body">
      <nav>
        <ul>
          <NavLink to="/company">
            <li>Company</li>
          </NavLink>
          <NavLink to="/missions">
            <li>Missions</li>
          </NavLink>
          <NavLink to="/rockets">
            <li>Rockets</li>
          </NavLink>
          {/* <NavLink to="/profile">
            <li>Profile</li>
          </NavLink> */}
          <NavLink to="/users">
            <li>Users</li>
          </NavLink>
        </ul>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};

export default NavBar;
