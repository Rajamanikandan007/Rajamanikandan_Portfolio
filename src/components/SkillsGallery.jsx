import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaFigma} from "react-icons/fa";
import { SiMongodb, SiGithub, SiCanva, SiArduino, SiGit } from "react-icons/si";
import { GoCopilot } from "react-icons/go";


const SkillsGallery = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", description: "Markup Language" },
    { icon: <FaCss3Alt />, name: "CSS3", description: "Styling" },
    { icon: <FaBootstrap />, name: "Bootstrap", description: "CSS Framework" },
    { icon: <FaJsSquare />, name: "JavaScript", description: "Script Language" },
    { icon: <FaReact />, name: "React", description: "Frontend Framework" },
    { icon: <SiMongodb />, name: "MongoDB", description: "Database" },
    { icon: <FaNodeJs />, name: "Node.js", description: "Backend Development" },
    { icon: <SiGithub />, name: "GitHub", description: "Code collaboration" },
    { icon: <SiCanva />, name: "Canva", description: "Design Tool" },
    { icon: <FaFigma />, name: "Figma", description: "UI/UX Design" },
    { icon: <SiArduino />, name: "Arduino IDE", description: "Program Microcontroller" },
    { icon: <GoCopilot />, name: "GitHub Copilot", description: "AI Pair Programmer" }
  ];

  return (
    <div className="container">
      <h2 className="display-5 fw-bold lh-1 m-5 text-center">My Skills</h2>
      <div className="row row-cols-2 g-4">
        {skills.map((skill, index) => (
          <div className="col-md-3 col-sm-6 text-center" key={index}>
            
            <div className="card skill shadow-sm p-3">
              <div className="display-4 text-primary">{skill.icon}</div>
              <h5 className="mt-3">{skill.name}</h5>
              <p className="text">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGallery;