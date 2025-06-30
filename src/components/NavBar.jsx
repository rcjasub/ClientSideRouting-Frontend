import React from "react";
import "./NavBarStyles.css";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Currently, we're using <a> tags to navigate to different pages.
      This means that every time we click on a link, the page will reload.
      Let's fix that!
      */}

      <nav className=".nav">
        <NavLink to="/"> Homapage </NavLink>
        <NavLink to="/comp"> Completed Tasks </NavLink>
        <NavLink to="/incomp"> Incomplete Tasks </NavLink>
        <NavLink to="/AddTask"> Add Task </NavLink>
      </nav>

      

      {/* <a href="/">All Tasks</a>
      <a href="/completed">Completed Tasks</a>
      <a href="/incomplete">Incomplete Tasks</a>
      <a href="/add-task">Add Task</a> */}
    </nav>
  );
};

export default NavBar;
