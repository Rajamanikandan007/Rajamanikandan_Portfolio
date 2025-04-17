import React from "react";
import cit from "../assets/awards/cit.webp";
import college from "../assets/awards/college.webp";
import saveetha from "../assets/awards/saveetha.webp";
import meenakshi from "../assets/awards/meenasaki.webp";

const Awards = () => {
  return (
    <div id="Awards">
      <h1 className="display-5 fw-bold lh-1 m-5 text-center">Awards</h1>

      <div className="container marketing">
        {/* Award 1 */}
          <div className="row featurette d-flex align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Electro Expo <strong>- Talent</strong>
              </h2>
              <p className="lead mt-3">
                <b>"</b>Event: <b>VIDYUTRENZ, Chennai Institute of Technology</b><br />
                Category: <b>Technical Expo</b><br />
                Held on: 04.02.2025<br />
                Participated in Electro Expo, a technical event conducted by the Department of{" "}
                <b>Electronics and Communication Engineering</b>, CIT, showcasing innovative concepts
                and projects in the <b>field of electronics and communication."</b>
              </p>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
              <img
                src={cit}
                className="shadow bg-body-tertiary rounded img-fluid"
                alt="CIT Certificate"
                width="500"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* Award 2 */}
        <div className="row featurette d-flex align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              1st Place <strong>- Project Expo 2024</strong>
            </h2>
            
            <p className="lead mt-3">
              <b>"</b>Event: <b>Project Expo 2024</b><br />
              Organized by: <b>Sri Muthukumaran Institute of Technology</b>, Chennai<br />
              Date: 19.09.2024<br />
              Won <b>First Place</b> in Project Expo 2024 for showcasing an innovative project in{" "}
              <b>Electronics and Communication Engineering</b>. This achievement highlights technical
              expertise, problem-solving skills, and a <b>commitment to innovation."</b>
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center">
            <img
              src={college}
              alt="Project Expo Certificate"
              width="500"
              className="shadow bg-body-tertiary rounded img-fluid"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        {/* Award 3 */}
        <div className="row featurette d-flex align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              2nd Place <strong>- Poster Presentation</strong>
            </h2>
            
            <p className="lead mt-3">
              <b>"</b>Event: <b>DRESTEIN '24 – 15th National Level</b> Inter-Collegiate Technical &
              Management Fest<br />
              Hosted by: <b>Saveetha Engineering College</b><br />
              Our project, <b>Smart Fire Detector and Alert System using Image Processing and IoT</b>, was
              recognized and got <b>Prize ₹1500 Cash</b> Award for its innovation and practical impact in{" "}
              <b>fire safety solutions."</b>
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src={saveetha}
              alt="Saveetha Award"
              width="500"
              className="shadow bg-body-tertiary rounded img-fluid"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        {/* Award 4 */}
        <div className="row featurette d-flex align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Prof. KRS Innovation Challenge{" "}
              <strong>- Innovation & Sustainability</strong>
            </h2>
            <p className="lead mt-3">
              <b>"</b>Organized by: <b>Meenakshi Sundararajan Engineering College</b><br />
              Competition Focus: <b>IoT, AI, Robotics, Cybersecurity, Embedded Systems, Renewable Energy</b>
              <br />
              Participated in a <b>business proposal</b> competition, presenting innovative solutions aligned
              with <b>emerging technologies and sustainability."</b>
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center">
            <img
              src={meenakshi}
              alt="KRS Innovation Challenge"
              className="shadow bg-body-tertiary rounded img-fluid"
              width="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </div>
  );
};

export default Awards;
