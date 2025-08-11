// --------------------------------------------------------
// Custom hook to debounce a value (like a search term) so
// that filtering or API calls aren't triggered on every keystroke.
// Specifically tailored for the Countries app's search input.
// --------------------------------------------------------

import { useState, useEffect } from "react";

/**
 * Debounce a given value by a specified delay before updating.
 * 
 * @param value - The value to debounce (e.g., search term).
 * @param delay - The debounce delay in milliseconds (default: 300).
 * @returns The debounced value that only updates after the delay.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
    // Local state to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Set up a timer to update the debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup: if value changes before delay is over, reset the timer
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};