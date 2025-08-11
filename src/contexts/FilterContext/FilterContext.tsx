/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

// Define the shape of the filter context state and actions
interface FilterContextType {
    search: string; // Current search text
    region: string; // Currently selected region filter
    setSearch: (search: string) => void; // Setter for search text
    setRegion: (region: string) => void; // Setter for region filter
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
    children: ReactNode;
}

/**
 * FilterProvider manages and provides search and region filter state
 */
export const FilterProvider = ({ children }: FilterProviderProps) => {
    // State to hold current search query text
    const [search, setSearch] = useState<string>("");

    // State to hold currently selected region filter; empty string means no filter
    const [region, setRegion] = useState<string>("");

    return (
        <FilterContext.Provider value={{ search, region, setSearch, setRegion }}>
            {children}
        </FilterContext.Provider>
    );
};

/**
 * useFilter hook provides convenient access to filter context
 * Throws an error if used outside FilterProvider
 */
export const useFilter = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};