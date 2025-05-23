import "../Styles/Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ generalMotion, navlinksMotion, topScroll }) => {
  const navLinks = [
    "o nama",
    "zakaži trening",
    "galerija",
    "oprema",
    "online"
  ];

  return (
    <nav>
      <motion.div
        variants={generalMotion}
        initial="hidden"
        animate="visible"
        className="logo-cont"
      >
        <Link className="logo-link" to="/" onClick={() => topScroll()}>
          <img src="/logo red.png" alt="home-logo" />
        </Link>
      </motion.div>
      <motion.div
        variants={generalMotion}
        initial="hidden"
        animate="visible"
        className="nav-links"
      >
        {navLinks.map((navlink) => (
          <motion.div variants={navlinksMotion}>
            <NavLink
              className="nav-link"
              key={navlink}
              to={`/${navlink}`}
              onClick={() => topScroll()}
            >
              {navlink}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
