import { useContext } from "react";
import darkIcon from "../assets/dark-mode.svg";
import lightIcon from "../assets/light-mode.svg";
import  { theam } from "../context/TheamContext";

export default function Header() {
  const [isDarkTheam, setDarkTheam] = useContext(theam);

  function changTheam() {
    setDarkTheam(!isDarkTheam);
  }

  localStorage.setItem("isDark", isDarkTheam);

  return (
    <div id="header">
      <div>
        <a href="/" id="logo">
          countries.find
        </a>
        <div id="mode-button" onClick={changTheam}>
          <img src={isDarkTheam ? lightIcon : darkIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
