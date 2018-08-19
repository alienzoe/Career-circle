import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ active }) => (
  <React.Fragment>
    <header>
      <div className="container">
        <div className="branding">
          <h1>
            <span className="highlight">Career</span>
            circle
          </h1>
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <li className={`menu-item ${active === "home" && "active"}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`menu-item ${active === "about" && "active"}`}>
              <Link to="/">About</Link>
            </li>
            <li className={`menu-item ${active === "career" && "active"}`}>
              <Link to="/">Career</Link>
            </li>
            <li
              className={`menu-item ${(active === "login" ||
                active === "signup") &&
                "active"}`}
            >
              <Link to={active === "signup" ? "/signup" : "/login"}>
                {active === "signup" ? "Signup" : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </React.Fragment>
);
