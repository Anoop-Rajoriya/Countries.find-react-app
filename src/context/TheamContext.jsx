import {  createContext,  useState } from "react";

export const theam = createContext();

export default function TheamContext({ children }) {
  const [isDarkTheam, setDarkTheam] = useState(JSON.parse(localStorage.getItem('isDark')) || false);



  return (
    <theam.Provider value={[isDarkTheam, setDarkTheam]}>
      <div id="app-wraper" className={isDarkTheam ? "dark" : "light"}>
        {children}
      </div>
    </theam.Provider>
  );
}
