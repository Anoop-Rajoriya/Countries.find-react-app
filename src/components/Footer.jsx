import  { useContext } from "react";
import githubIcon from "../assets/github-icon.svg";
import githubDarkIcon from "../assets/github-dark-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import linkedinDarkIcon from "../assets/linkedin-dark-icon.svg";
import instaIcon from "../assets/insta-icon.svg";
import instaDarkIcon from "../assets/insta-dark-icon.svg";
import { theam } from "../context/TheamContext";

export default function Footer() {
  const [isDarkTheam] = useContext(theam);
  return (
    <div id="footer-wraper">
      <div id="footer">
        <div id="left">
          <a href="/" id="logo">
            countries.find
          </a>
          <p>
            Made by Anoop Rajoriya in React <span>&copy;</span>
          </p>
        </div>
        <div id="right">
          <a href="https://github.com/Anoop-Rajoriya" target="_blank">
            <img src={isDarkTheam ? githubDarkIcon : githubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/anoop-rajoriya-370001232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img src={isDarkTheam ? linkedinDarkIcon : linkedinIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/anoop__rajoriya_01_portfolio?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==" target="_blank">
            <img src={isDarkTheam ? instaDarkIcon : instaIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
