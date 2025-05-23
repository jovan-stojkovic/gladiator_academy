import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPhoto from "./Components/MainPhoto";
import Footer from "./Components/Footer";

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
        <MainPhoto />
        <Footer topScroll={topScroll} />
      </main>
    </Router>
  );
};

export default App;
