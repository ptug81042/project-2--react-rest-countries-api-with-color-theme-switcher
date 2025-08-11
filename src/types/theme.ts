// Theme can be either "light-theme" or "dark-theme"
export type Theme = "light" | "dark";

// Context value shape for ThemeContext
export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}