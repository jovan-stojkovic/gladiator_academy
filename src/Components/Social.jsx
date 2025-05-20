import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="social-links">
      <Link to="https://www.instagram.com/akademija.gladiator/" target="_blank">
        <img src="/icons/instagram.svg" alt="instagram" />
      </Link>
      <Link to="https://www.tiktok.com" target="_blank">
        <img src="/icons/tiktok.svg" alt="tiktok" />
      </Link>
      <Link to="https://www.youtube.com/" target="_blank">
        <img src="/icons/youtube.svg" alt="youtube" />
      </Link>
    </div>
  );
};

export default Social;
