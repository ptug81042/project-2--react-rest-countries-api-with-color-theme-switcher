import { createContext, useState, useEffect, type ReactNode } from "react";
import type { ThemeContextType, Theme } from "../../types/ThemeContext";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // Initialize theme state with localStorage fallback or default 'light'
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("app-theme");
        return (storedTheme === "light" || storedTheme === "dark") ? storedTheme : "light";
    });

    // Toggle between light and dark themes and persist to localStorage
    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("app-theme", newTheme);
            return newTheme;
        });
    };

    // Sync theme to document body class for global CSS theme styles
    useEffect(() => {
        document.body.classList.toggle("dark-theme", theme === "dark");
        document.body.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };