import { useContext } from "react";
import type { ThemeContextType } from "../../types/ThemeContext";
import { ThemeContext } from "./ThemeContext";

/**
 * Custom hook to access the ThemeContext
 * Throws an error if used outside the ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}