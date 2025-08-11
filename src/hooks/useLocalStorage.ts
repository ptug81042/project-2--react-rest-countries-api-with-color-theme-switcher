// --------------------------------------------------------
// Custom hook to manage state synchronized with localStorage.
// Tailored for the Countries app to store theme preference,
// filter settings, or cached API responses.
// --------------------------------------------------------

import { useState, useEffect } from "react";

/**
 * Manage state that persists in localStorage.
 * 
 * @param key - The localStrage key.
 * @param initialValue - The default value if none is found.
 * @returns [storedValue, setStoredValue] like useState.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    // Initialize state from localStorage or use the initial value
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Update localStorage whenever state changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
};