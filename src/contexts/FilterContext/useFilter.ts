import { useContext } from "react";
import type { FilterContextType } from "../../types/FilterContext";
import { FilterContext } from "./FilterContext";

/**
 * Custom hook to consume FilterContext
 * Throws error if used outside FilterProvider
 */
export const useFilter = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};