// --------------------------------------------------------
// Custom hook for fetching data with loading and error states.
// Tailored for the Countries app to handle REST Countries API calls
// or any endpoint needed within the app.
// --------------------------------------------------------

import { useState, useEffect } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

/**
 * Fetch data from a given URL with built-in loading and error state handling.
 * 
 * @param url - The endpoint URL to fetch from.
 * @param options - Optional fetch configuration.
 * @returns An object with { data, loading, error }.
 */
export function useFetch<T>(url: string, options?: RequestInit): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true; // Prevents state updates if unmounted

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const result: T = await response.json();

                if (isMounted) {
                    setData(result);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url, options]);

    return { data, loading, error };
};