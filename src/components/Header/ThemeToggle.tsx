import React from "react";
import { useTheme } from "../../contexts/ThemeContext/useTheme";
import styles from "./ThemeToggle.module.css";

/**
 * ThemeToggle component to switch between light and dark themes.
 */
const ThemeToggle: React.FC = () => {
    // Consume theme and toggleTheme from context
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={styles.toggleButton}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? "🌞 Light Mode" : "🌜 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;
