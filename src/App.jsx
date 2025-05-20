import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Social from "./Components/Social";
// import MainPhoto from "./Components/MainPhoto";

const App = () => {
  const generalMotion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const navlinksMotion = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const topScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <main>
        <Navbar
          generalMotion={generalMotion}
          navlinksMotion={navlinksMotion}
          topScroll={topScroll}
        />
        <div className="main-photo">
          <div className="text">
            <h2 className="headline">AKADEMIJA</h2>
            <h1 className="main-headline">GLADIATOR</h1>
          </div>

          <Social />
        </div>
      </main>
    </Router>
  );
};

export default App;
