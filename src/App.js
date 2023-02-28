import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Landing from "./Components/Landing/Landing";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import SmoothScroll from "smooth-scroll";
import AnimatedCursor from "react-animated-cursor";

export const scroll = new SmoothScroll('a[href*="#"]');

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={0}
        outerSize={30}
        color="128, 128, 128"
        outerAlpha={0.6}
        innerScale={0}
        outerScale={0}
      />
      <div>
        <Navbar />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
