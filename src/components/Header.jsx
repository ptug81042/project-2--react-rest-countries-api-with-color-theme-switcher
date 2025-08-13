import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; // Create ThemeContext to track dark/light
import "../Main.css";

export default function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Where in the world?</h1>
      <button
        onClick={toggleTheme}
        className="detail-link"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}