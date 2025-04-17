import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { Themecontext } from "../App";
import { useContext } from "react";


const NavBar = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <>
      <nav
        className="custom-gradient navbar navbar-expand-lg fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* Navbar top section with toggler, brand, and theme button */}
        
            {/* Left: Toggler + Brand Logo + Name */}
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler me-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link
                className="navbar-brand me-0"
                to="heroBanner"
                spy={true}
                smooth={true}
                duration={500}
              >
                <img
                  src={logo}
                  alt="Logo"
                  width="62"
                  height="56"
                  className="d-inline-block align-text-center image-fluid"
                />
                <b>RAJAMANIKANDAN</b>
              </Link>
            </div>

            

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="heroBanner"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About me
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  style={{ color: "inherit", textDecoration: "none" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Achievements
                </Link>
                <ul className="dropdown-menu" data-bs-theme="default">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="Certification"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Certification
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="Awards"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Awards <i className="bi bi-award-fill"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
