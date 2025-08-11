/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useCallback } from "react";
import type { Theme, ThemeContextType } from "../../types/ThemeContext";

// 1️⃣ Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2️⃣ Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Theme state
    const [theme, setTheme] = useState<Theme>("light");

    // Function to toggle theme
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};