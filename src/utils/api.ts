// Utility functions for interacting with the REST Countries API.
// Tailored to the Countries app context with TypeScript typing.

import { type Country } from "../types/CountriesContext";

// Base API URL
const BASE_URL = "https://restcountries.com/v3.1";

/**
 * Fetch all countries with only the fields we need.
 * @returns Promise<Country[]>
 */
export async function fetchAllCountries(): Promise<Country[]> {
    const response = await fetch(`${BASE_URL}/all?fields=name,cca3,flags,region,capital,population`);
    if (!response.ok) {
        throw new Error(`Error fetching all countries ${response.statusText}`);
    }
    return response.json();
};

/**
 * Search countries by name.
 * 
 * @param name - Country name or partial name to search.
 * @returns Promise<Country[]>
 */
export async function searchCountriesByName(name: string): Promise<Country[]> {
    const response = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}?fields=name,cca3,flags,region,capital,population`);
    if (!response.ok) {
        throw new Error(`Error searching countries: ${response.statusText}`);
    }
    return response.json();
};

/**
 * Filter countries by region.
 * @param region - The region name (e.g., "Asia", "Europe").
 * @returns Promise<Country[]>
 */
export async function filterCountriesByRegion(region: string): Promise<Country[]> {
    const response = await fetch(`${BASE_URL}/region/${encodeURIComponent(region)}?fields=name,cca3,flags,region,capital,population`);
    if (!response.ok) {
        throw new Error(`Error filtering countries by region: ${response.statusText}`);
    }
    return response.json();
};