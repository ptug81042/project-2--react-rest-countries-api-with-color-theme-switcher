// Utility formatting functions for the Countries app context.

import { type Country } from "../types/CountriesContext";

/**
 * Format a population number with commas (e.g., 1,234,567).
 * @param population - The population number.
 * @returns A formatted string.
 */
export function formatPopulation(population: number): string {
    return population.toLocaleString();
};

/**
 * Get the display-friendly country name.
 * Handles both common and official names if needed.
 * @param country - Country object.
 * @returns Common country name as a string.
 */
export function getCountryName(country: Country): string {
    return country.name;
}

/**
 * Get a comma separated string of capital cities.
 * @param country - Country object.
 * @returns String of capitals or "N/A".
 */
export function getCapitalString(country: Country): string {
    if (Array.isArray(country.capital)) {
        return country.capital.length > 0 ? country.capital.join(", ") : "N/A";
    }
    return typeof country.capital === "string" && country.capital.length > 0 ? country.capital : "N/A";
};