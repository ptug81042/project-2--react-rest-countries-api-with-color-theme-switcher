// Defines types for CountriesContext

/**
 * Represents a country as used in the app
 */
export interface Country {
    flagUrl: string;
    name: {
        common: string;
        official?: string
    };
    population: number;
    region: string;
    capital?: string[];
    code: string;
}

/**
 * Shape of the value provided by countriesContext
 */
export interface CountriesContextType {
    countries: Country[]; // array of country objects
    loading: boolean; // loading status flag
    error: string | null; // error message or null if no error
    refreshCountries: () => void; // function to reload country data
}