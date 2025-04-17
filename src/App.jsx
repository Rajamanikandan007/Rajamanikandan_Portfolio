import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Awards from "./components/Awards";
import SkillsGallery from "./components/SkillsGallery" 
import { createContext, useState } from "react";

export const Themecontext = createContext(null);

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
    <>
    <div className="App" id={theme}>
      <NavBar />
        
     
      <HeroBanner/>
      
      

      
      <AboutMe/>
      <Certificate/>
      <Projects/>
      <Awards/>
      <SkillsGallery /> 
      <Contact/>
      <Footer/>
      </div>
    </>
    </Themecontext.Provider>
  );
}

export default App;