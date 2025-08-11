import type { FormattedCountry } from "./FormattedCountry";

// Simplified, UI-friendly country type
export type Country = FormattedCountry;

/**
 * Shape of the value provided by countriesContext
 */
export interface CountriesContextType {
    countries: Country[]; // array of country objects
    loading: boolean; // loading status flag
    error: string | null; // error message or null if no error
    refreshCountries: () => void; // function to reload country data
}