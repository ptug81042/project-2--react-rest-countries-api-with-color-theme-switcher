/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Country, CountriesContextType } from "../../types/CountriesContext";
import { fetchAllCountries } from "../../utils/api";
import { formatPopulation, getCountryName, getCapitalString } from "../../utils/format";

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

interface CountriesProviderProps {
    children: ReactNode;
}

export const CountriesProvider = ({ children }: CountriesProviderProps) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch and process countries data
    const loadCountries = async () => {
        setLoading(true);
        setError(null);
        try {
            // Call the API utility to fetch all countries
            const data = await fetchAllCountries();

            // Format the fetched data to match our Country type and UI needs
            const formattedCountries: Country[] = data.map((c: any) => ({
                flagUrl: c.flags?.png || "",
                name: getCountryName(c.name),
                population: formatPopulation(c.population),
                region: c.region || "Unknown",
                capital: getCapitalString(c.capital),
                code: c.cca2,
            }));

            setCountries(formattedCountries);
        } catch (err: any) {
            setError(err.message || "Failed to fetch countries");
        } finally {
            setLoading(false);
        }
    };

    // Load countries once on mount
    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                loading,
                error,
                refreshCountries: loadCountries,
            }}
        >
            {children}
        </CountriesContext.Provider>
    );
};

// Export the context for usage in custom hooks
export { CountriesContext };