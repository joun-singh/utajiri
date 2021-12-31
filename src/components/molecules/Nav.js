import React, { Fragment } from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";

import { BlockLabel } from "../atom/atoms";

const Nav = () => {
  return (
    <BlockLabel>
      <ul className="d-flex nav">
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#39B54A" : "",
              };
            }}
            to="/"
          >
            Dashboad
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#39B54A" : "",
              };
            }}
            to="/Invester"
          >
            Investors
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#39B54A" : "",
              };
            }}
            to="/resources"
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#39B54A" : "",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </BlockLabel>
  );
};

export default Nav;
