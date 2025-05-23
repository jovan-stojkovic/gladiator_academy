import "../Styles/Footer.scss";
import { Link } from "react-router-dom";
const Footer = ({ topScroll }) => {
  return (
    <footer>
      <div className="segment left">
        <Link
          to="https://www.instagram.com/sc.gladiator.bg/?hl=en"
          target="_blank"
        >
          SC Gladiator
        </Link>
        <p>Oslobođenja BB</p>
        <Link
          to="https://www.instagram.com/fk_radnicki_novibeograd/?hl=en"
          target="_blank"
        >
          FK Radnički
        </Link>
        <p>Tošin Bunar 190</p>
        <p>+38164555555</p>
        <p>mejl@gmail.com</p>
      </div>

      <div className="segment center">
        <div className="footer-logo"></div>
        <div className="top-button" onClick={() => topScroll()}>
            <p>Back to the top</p>
        </div>
      </div>

      <div className="segment right">
        <Link
          to="https://www.instagram.com/akademija.gladiator/"
          target="_blank"
        >
          @instagram
        </Link>
        <Link className="tiktok-link" to="https://www.tiktok.com" target="_blank">
          @tiktok
        </Link>
        <Link className="youtube-link" to="https://www.youtube.com/" target="_blank">
          @youtube
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
