import "./App.css";
import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects";
// import useMediaquery from "./Hooks/useMediaquery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopofPage, setTopofPage] = useState(true);
  // const isDesktop = useMediaquery("(min-width:1024px)");
  // console.log(isDesktop);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage("home");
        setTopofPage(true);
      }
    };
    if (window.scrollY !== 0) setTopofPage(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(isTopofPage);

  return (
    <div className="App">
      <div>
        <Navbar
          isTopofPage={isTopofPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Landing setSelectedPage={setSelectedPage} />
        <hr className="border border-2 border-danger" />
        <Skills setSelectedPage={setSelectedPage} />
        <hr className="border border-2 border-danger" />
        <Projects />
      </div>
    </div>
  );
}

export default App;
