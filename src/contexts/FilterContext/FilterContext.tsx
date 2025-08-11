import { createContext, useState, type ReactNode } from "react";
import type { FilterContextType } from "../../types/FilterContext";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface FilterProviderProps {
    children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
    // State for search input string
    const [search, setSearch] = useState<string>("");

    // State for selected region filter
    const [region, setRegion] = useState<string>("");

    return (
        <FilterContext.Provider value={{ search, region, setSearch, setRegion }}>
            {children}
        </FilterContext.Provider>
    );
};

export { FilterContext };