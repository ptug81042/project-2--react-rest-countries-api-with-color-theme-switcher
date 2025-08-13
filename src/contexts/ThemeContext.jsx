import React, { createContext, useState, useEffect } from "react";

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider wraps your app
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Persist theme in localStorage if user reloads
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Update body class whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}