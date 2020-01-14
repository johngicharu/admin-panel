import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className={`nav ${props.menuActive && "open"}`}>
      <ul className="nav-items">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link ${props.menuActive && "menu-magnified"}`}
          >
            <i className="icon-th-large"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/users"
            className={`nav-link ${props.menuActive && "menu-magnified"}`}
          >
            <i className="icon-users"></i>
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/mail"
            className={`nav-link ${props.menuActive && "menu-magnified"}`}
          >
            <i className="icon-mail-alt"></i>
            <span>Mail</span>
          </Link>
        </li>
        <li className="nav-item drawback">
          <a
            href="#!"
            className={`nav-link ${props.menuActive && "menu-magnified"}`}
            onClick={props.handleMenuItemClick}
          >
            <i className="icon-menu"></i>
            <span>Close</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
