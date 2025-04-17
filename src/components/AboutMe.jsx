import React from "react";
import aboutMe from "../assets/aboutMe.png";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { Link, Element } from "react-scroll";

const AboutMe = () => {
  return (
    
    <>
      <div className="container">
        <div id="about-me" className="about-section">
          <div className="text-center">
            <h1 className="display-5 fw-bold lh-1 ">About me</h1>
          </div>

          <div className="row h-100">
            <div className="col-md-5">
              <img src={aboutMe} alt="Aboutme-Image" className="img-fluid rounded-circle shadow" />
            </div>
            <div className="col-md-7">
              <ul className="nav nav-tabs aboutTabs" id="aboutTabs">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#education"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#internship"
                  >
                    Internship
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#hobby">
                    Hobby
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-3">
                <div id="about" className="tab-pane fade show active">
                  <p>
                    My name is Rajamanikandan, and I am a MERN Stack Developer,
                    UI/UX Enthusiast, and IoT Innovator with a passion for
                    creating modern, user-friendly, and scalable web
                    applications. I specialize in both front-end and back-end
                    development, ensuring seamless functionality and visually
                    appealing designs.
                  </p>

                  <p>
                    With a strong foundation in HTML, CSS, JavaScript, React,
                    Node.js, Express, and MongoDB, I have worked on various
                    projects that solve real-world problems. One of my most
                    notable projects is the Smart Fire Detector and Alert
                    System, which combines image processing and IoT to enhance
                    fire safety measures. Additionally, I am working on an
                    IoT-based Smart Irrigation System, leveraging automation to
                    optimize water usage in agriculture.
                  </p>

                  <p>
                    Previously, I have interned and trained in various fields,
                    including Data Analytics, Web Development, UI/UX Design, and
                    Android IoT Development. These experiences have given me
                    exposure to modern technologies, industry best practices,
                    and cross-functional collaboration.
                  </p>

                  <p>
                    Apart from coding, I am an athlete and the goalkeeper for my
                    college football team, where I have honed my discipline,
                    teamwork, and decision-making skills—qualities that I bring
                    into my professional career. My enthusiasm for gaming also
                    inspires my creativity and problem-solving abilities in
                    software development.
                  </p>

                  <p>
                    I thrive on continuous learning, innovation, and pushing
                    boundaries to build impactful digital solutions. Whether
                    it’s developing dynamic web applications, designing
                    intuitive user interfaces, or integrating IoT with software,
                    I am dedicated to creating cutting-edge solutions that
                    enhance user experiences and drive efficiency.
                  </p>
                </div>
                <div id="education" className="tab-pane fade">
                  <ul>
                    <strong>Education</strong>
                    <li>B.E. in Electronics and Communication Engineering (ECE), Sri Muthukumaran Institute of Technology – Graduating in 2025.</li> 
                    <li>HSC (2021) and SSLC (2019), Madras Christian College Higher Secondary School.</li>
                    
                    <strong>Leadership & Extracurriculars</strong>  
                    <li>NCC Army Cadet – Completed firing training, attended Army camp, earned NCC A Certificate.</li>
                    <li>School Prefect – Gained leadership and organizational experience.</li>

                    <strong>Strengths</strong>

                   <li> Strong problem-solving and system integration skills. Passionate about innovation and continuous learning.</li>
                   <li>Committed to developing impactful tech solutions that improve user experience and efficiency.
                  </li>
                  </ul>
                </div>

                <div id="internship" className="tab-pane fade">
                  I have participated in various internships and workshops to
                  explore my interests, build my skills, and find my suitable
                  career path. These experiences have helped me grow in
                  technology, design, and development:
                  <ul>
                    <li>Intern Trainee – Symbiotic InfoTech Pvt Ltd</li>
                    <li>Workshop on Data Analytics with KNIME – NSIC</li>
                    <li>
                      Industrial-Based Android Application Development with IoT
                      – NSIC
                    </li>
                    <li>UI/UX Design Virtual Internship – Codsoft</li>
                    <li>Web Development Training – Edureka</li>
                    <li>
                      Front-End Development Internship – Empower Guiding Centre
                    </li>
                    <li>Data Analytics Workshop – Jabaaj Learnings</li>
                  </ul>
                  
                </div>

                <div id="hobby" className="tab-pane fade">
                  <p>
                    Outside of coding and technology, I have a few hobbies that
                    keep me engaged and inspired:
                  </p>

                  <p>
                    ⚽ Football (Goalkeeper) – I am the goalkeeper for my
                    college football team. I love the thrill of the game, the
                    strategy, and the teamwork involved. Being a goalkeeper has
                    taught me discipline, quick decision-making, and resilience
                    under pressure.
                  </p>

                  <p>
                    🎮 Gaming – Gaming isn’t just entertainment for me; it’s a
                    way to enhance my creativity and problem-solving skills. I
                    enjoy exploring different genres, especially strategy-based
                    and open-world games, which help me think critically and
                    adapt to new challenges.
                  </p>

                  <p>
                    🎨 UI/UX Designing – I have a keen interest in designing
                    user-friendly interfaces. I like experimenting with
                    different color palettes, typography, and layouts to create
                    visually appealing and intuitive designs.
                  </p>

                  <p>
                    📷 Photography & Editing – I love capturing moments and
                    experimenting with photo and video editing tools. It’s a fun
                    way to express creativity and improve visual storytelling
                    skills.
                  </p>

                  <p>
                    💡 Tech Exploration – I often spend time exploring emerging
                    technologies, from AI and IoT to the latest trends in web
                    development. Learning new things keeps me excited and
                    motivated to innovate.
                  </p>
                </div>
              </div>
              <div className="social-icons text-center mt-3">
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-facebook"
                    href="https://www.facebook.com/people/Raja-Manikandan/pfbid0LgDdArCzsMA9ui42yWXdQBsbMrQGzaB2aDpuLowyNeushtaS5VrgeffcXTJYULkFl/?name=xhp_nt_"
                    target="_blank"
                  >
                    <FaFacebook></FaFacebook>
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-instagram"
                    href="https://www.instagram.com/king_of_god_kratos?igsh=bHl5bXk4YWszOGx5"
                    target="_blank"
                  >
                    <LuInstagram></LuInstagram>
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-linkedin"
                    href="https://www.linkedin.com/in/rajamanikandan-s-0787b4288/"
                    target="_blank"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>{" "}
                </li>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default AboutMe;
