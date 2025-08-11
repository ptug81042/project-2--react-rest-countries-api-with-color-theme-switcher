/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import type { Country } from '../../types/country';

// Define the shape of the context value
interface CountriesContextType {
    countries: Country[]; // All countries data
    loading: boolean; // Loading state during fetch
    error: string | null; // Error message if fetching fails
    refreshCountries: () => void; // Function to re-fetch data manually
}

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

interface CountriesProviderProps {
    children: ReactNode;
}

/**
 * CountriesProvider fetches countries from the API,
 * manages loading and error states,
 * and provides the countries list to consumers.
 */
export const CountriesProvider= ({ children }: CountriesProviderProps) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch countries from REST Countries API
    const fetchCountries = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,cca2");

            if (!response.ok) {
                throw new Error(`Error fetching countries: ${response.statusText}`);
            }

            const data = await response.json();

            // Normalize data to match Country type
            const formatted: Country[] = data.map((c: any) => ({
                flagUrl: c.flags?.png || "",
                name: c.name?.common || "Unknown",
                population: c.population?.toLocaleString("en-GB") || "0",
                region: c.region || "Unknown",
                capital: c.capital?.[0] || "",
                code: c.cca2,
            }));

            setCountries(formatted);
        } catch (err: any) {
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    // Fetch countries on component mount
    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <CountriesContext.Provider value={{ countries, loading, error, refreshCountries: fetchCountries }}>
            {children}
        </CountriesContext.Provider>
    );
};

/**
 * useCountries hook for easy access to CountriesContext
 * Throws error if used outside provider
 */
export const useCountries = (): CountriesContextType => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error("useCountries must be used within a CountriesProvider");
    }
    return context;
}