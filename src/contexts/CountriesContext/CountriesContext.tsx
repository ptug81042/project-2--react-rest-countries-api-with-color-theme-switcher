/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useCallback } from "react";
import type { Country } from "../../types";
import type { CountriesContextType } from '../../types/CountriesContext'

// 1️⃣ Create the context with an undefined initial value for safety
export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

// 2️⃣ Provider component definition
export const CountriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Holds the array of countries
    const [countries, setCountries] = useState<Country[]>([]);
    // Tracks loading state
    const [loading, setLoading] = useState<boolean>(false);
    // Tracks error messages if fetching fails
    const [error, setError] = useState<string | null>(null);

    // Function to fetch or refresh country data
    const refreshCountries = useCallback(() => {
        setLoading(true);
        setError(null);

        // Simulated fetch — replace with real API call if needed
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                // Transform data into our Country type
                const mapped: Country[] = data.map((c: any) => ({
                    flagUrl: c.flags.svg,
                    name: c.name.common,
                    population: c.population.toLocaleString(),
                    region: c.region,
                    capital: c.capital?.[0] || "N/A",
                    code: c.cca3,
                }));
                setCountries(mapped);
            })
            .catch(() => setError("Failed to load countries"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <CountriesContext.Provider value={{ countries, loading, error, refreshCountries }}>
            {children}
        </CountriesContext.Provider>
    );
};