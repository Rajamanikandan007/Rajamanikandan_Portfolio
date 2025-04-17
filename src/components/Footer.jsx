import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { Themecontext } from "../App";
import { useContext } from "react";



const Footer = () => {
  const { theme, toggleTheme } = useContext(Themecontext);

  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div className="text-center">
            <p className="my-3">
              "Dream big, work hard, stay focused, never give up, Push your
              limits, embrace challenges, and grow every day!" 💪🔥
            </p>

            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item social-icons">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="https://www.facebook.com/people/Raja-Manikandan/pfbid0LgDdArCzsMA9ui42yWXdQBsbMrQGzaB2aDpuLowyNeushtaS5VrgeffcXTJYULkFl/?name=xhp_nt_"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item social-icons">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="https://www.instagram.com/king_of_god_kratos?igsh=bHl5bXk4YWszOGx5"
                  target="_blank"
                >
                  <LuInstagram />
                </a>
              </li>
              <li className="list-inline-item social-icons">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="https://www.linkedin.com/in/rajamanikandan-s-0787b4288/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="#"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img src={logo} alt="logo" className="bi" width="30" height="24" />
          </a>
          <span className="copyRights mb-3 mb-md-0 ">
            <strong>Rajamanikandan</strong> &copy; 2025
          </span>
        </div>

        <ul className="contact nav col-md-4 justify-content-end d-flex">
          <li className="ms-3">
            <a className="shadow" href="tel:7449070740" target="_blank">
              <FaPhoneAlt />
              7449070740
            </a>
          </li>
          <li className="ms-3">
            <a className="shadow" href="https://wa.me/7449070740" target="_blank">
              <FaWhatsapp />
              Whatsapp
            </a>
          </li>
          <li className="ms-3">
            <a
              className="shadow"
              href="mailto:mr.rajamanikandan@gmail.com"
              target="_blank"
            >
              <MdOutlineAttachEmail />
              Email
            </a>
          </li>
        </ul>
      </footer>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={toggleTheme}
          className="btn btn-circle"
          style={{
            backgroundColor: theme === "light" ? "#ffd700" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
          }}
        >
          {theme === "light" ? (
            <IoSunny style={{ fontSize: 24 }} />
          ) : (
            <BsMoonStarsFill style={{ fontSize: 24 }} />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;
