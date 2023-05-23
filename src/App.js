import "./App.css";
import React, { useState } from "react";
import Intro from "./Components/IntroLoader/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import SmoothScroll from "smooth-scroll";
import data from "./MyData.json";
import { useEffect } from "react";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  speedAsDuration: true,
  easing: "easeInQuad",
});

function App() {
  const [isLogoRequired, setLogoRequired] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLogoRequired(false);
    }, 3000);
  });

  return (
    <div className="App">
      {isLogoRequired ? (
        <Intro />
      ) : (
        <div>
          <Navbar data={data.navbar} />
          <Landing data={data.home} />
          <Skills data={data.skills} />
          <Projects data={data.projects} />
          <Footer data={data.contact} />
        </div>
      )}
    </div>
  );
}

export default App;
