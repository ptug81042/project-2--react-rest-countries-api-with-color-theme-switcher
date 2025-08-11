import { useContext } from "react";
import type { FilterContextType } from "../../types/FilterContext";
import { FilterContext } from "./FilterContext";

/**
 * Custom hook to access the FilterContext
 * Throws an error if used outside the FilterProvider
 */
export const useFilter = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};