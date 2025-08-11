/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useCallback } from "react";
import type { FilterContextType } from "../../types/FilterContext";

// 1️⃣ Create context
export const FilterContext = createContext<FilterContextType | undefined>(undefined);

// 2️⃣ Provider component
export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Search query state
    const [search, setSearchState] = useState<string>("");
    // Region filter state
    const [region, setRegionState] = useState<string>("");

    // Memoized setters (optional optimization)
    const setSearch = useCallback((value: string) => setSearchState(value), []);
    const setRegion = useCallback((value: string) => setRegionState(value), []);

    return (
        <FilterContext.Provider value={{ search, region, setSearch, setRegion }}>
            {children}
        </FilterContext.Provider>
    );
};