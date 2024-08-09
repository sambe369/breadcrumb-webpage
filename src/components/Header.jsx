import React from "react";
import {NavLink } from "react-router-dom";
// import {FiArrowRightCircle} from "react-icons/Fi";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg header px-5">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="bc-logo img-fluid"
              src="../breadcrumblogo.png"
              width={188}
              height={70}
              alt="logo"
            />
          </a>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link item"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link item" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link item" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link item" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link item" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link item" to="/career">
                  Career
                </NavLink>
              </li>
              {/* <li className="nav-item mx-2">
                <div className="get-started">
                  <NavLink className="text-decoration-none" to="/contact">
                    <button className="button d-flex justify-content-center align-items-center gap-2 ">
                      <span>Get Started</span>
                    </button>
                  </NavLink>
                </div>
  </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
