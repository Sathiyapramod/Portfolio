import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]');

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Landing />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
