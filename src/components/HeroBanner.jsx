import React from "react";
import myself from "../assets/myself.webp";
import { BsPersonLinesFill } from "react-icons/bs";
import Resume from '../assets/Rajamanikandan_Resume.pdf'



const HeroBanner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            id="heroBanner"
            className="heroBanner row flex-lg-row-reverse align-items-center g-4  py-5"
          >
            <div className="col-10 col-sm-6 col-lg-6">
              <img
                alt="MySelf Image"
                src={myself}
                className="img-fluid d-flex justify-content-end rounded-circle shadow-lg ms-5"
              />
            </div>
            <div className="col-lg-5 m-2">
              <p className=" display-6 lead">
                Hi, I'm <b>Rajamanikandan</b>
              </p>
              <h2 className="display-6 fw-bold lh-1 ms-1 mb-3">
                Full-Stack Web Developer
              </h2>
              <p className="lead">
                I am Rajamanikandan, a MERN Stack Developer and UI/UX Designer
                with a passion for creating responsive and user-friendly web
                applications. I love solving complex problems with creative
                solutions and staying updated with the latest technologies.
                <hr />
                Browse, get inspired, and see the art of fusion of aesthetics
                with technology.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  role="button"
                  download="resume"
                  href={Resume}
                  target="_blank"
                  className="btn btn-primary btn-lg px-4 me-md-2 shadow"
                >
                  
                  Resume <BsPersonLinesFill />

                </a>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    
    </>
  );
};

export default HeroBanner;
