/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";
import type { FormattedCountry } from "../../types/FormattedCountry";
import type { CountriesContextType } from "../../types/CountriesContext";
import { useFetch } from "../../hooks/useFetch";
import { formatPopulation } from "../../utils/format";

export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

interface CountriesProviderProps {
    children: ReactNode;
}

/**
 * CountriesProvider fetches countries from REST Countries API,
 * formats them, and provides the data to consumer components.
 */
export const CountriesProvider = ({ children }: CountriesProviderProps) => {
    const [countries, setCountries] = useState<FormattedCountry[]>([]);
    const { data, loading, error, refetch } = useFetch<any[]>(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,cca2"
    );

    useEffect(() => {
        if (data) {
            const formatted = data.map((c) => ({
                flagUrl: c.flags?.png || "",
                name: c.name.common,
                population: formatPopulation(c.population),
                region: c.region || "Unknown",
                capital: c.capital?.join(", ") || "N/A",
                code: c.cca2,
            }));
            setCountries(formatted);
        }
    }, [data]);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                loading,
                error,
                refreshCountries: refetch,
            }}
        >
            {children}
        </CountriesContext.Provider>
    );
};