import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { GiPhotoCamera } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" activeclassname="active-link" exact="true">
          <GiPhotoCamera />
        </NavLink>
      </div>

      <div className="header-content">
        <h1>Creative Studioz Photography</h1>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" activeclassname="active-link" exact="true">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/mywork" activeclassname="active-link">
                My Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/photoframes" activeclassname="active-link">
                Photo Frames
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages" activeclassname="active-link">
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" activeclassname="active-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;