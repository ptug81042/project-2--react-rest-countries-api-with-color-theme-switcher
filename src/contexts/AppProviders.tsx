import React, { type ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import { CountriesProvier } from "./CountriesContext/CountriesContext";
import { FilterProvider } from "./FilterContext/FilterContext";

interface AppProvidersProps {
    children: ReactNode;
}

/**
 * AppProviders component wraps the app with all context providers.
 * It simplifies the top-level setup and ensures contexts are available globally.
 */
export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        // ThemeProvider provides dark/light theme context to descendants
        <ThemeProvider>
            {/* CountriesProvider supplies country data and state */}
            <CountriesProvier>
                {/* FilterProvider manages search and region filters */}
                <FilterProvider>
                    {/* Render all nested children */}
                    {children}
                </FilterProvider>
            </CountriesProvier>
        </ThemeProvider>
    );
};