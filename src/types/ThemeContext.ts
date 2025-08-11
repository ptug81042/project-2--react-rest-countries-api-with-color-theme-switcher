// Defines types for the ThemeContext

/**
 * Theme type - only allows these two string literals for strong typing.
 */
export type Theme = "light" | "dark";

/**
 * Shape of the value provided by ThemeContext
 */
export interface ThemeContextType {
    theme: Theme; // current theme, "light" or "dark"
    toggleTheme: () => void; // Function to toggle between themes
}