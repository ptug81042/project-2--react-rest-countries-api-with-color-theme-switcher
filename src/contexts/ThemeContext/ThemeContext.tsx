/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";

import type { ThemeContextType } from "../../types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

/**
 * ThemeProvider manages the current theme state,
 * saves user preference to localStorage,
 * and exposes toggle function.
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // Initialize theme state with saved value or default to 'dark'
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const saved = localStorage.getItem("theme");
        return saved === "light" || saved === "dark" ? saved : "dark";
    });

    // Update body class and localStorage whenever theme changes
    useEffect(() => {
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    // Toggle theme between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * useTheme hook provides easy access to ThemeContext
 * Throws error if used outside ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};