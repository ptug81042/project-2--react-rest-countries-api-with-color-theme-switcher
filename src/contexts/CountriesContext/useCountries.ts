import { useContext } from "react";
import type { CountriesContextType } from "../../types/CountriesContext";
import { CountriesContext } from "./CountriesContext";

/**
 * Custom hook to access the CountriesContext
 * Throws error if used outside of CountriesProvider
 */
export const useCountries = (): CountriesContextType => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error("useCountries must be used within a CountriesProvider");
    }
    return context;
};