import React, { type ChangeEvent } from "react";
import styles from "./SearchInput.module.css";

// Props definition for the SearchInput component
interface SearchInputProps {
    value: string; // Current state query text
    onChange: (value: string) => void; // Callback to update search query
    placeholder?: string; // Optional placeholder text
}

/**
 * SearchInput Component
 * - Renders a themed search bar for filtering countries by name.
 * - Fully controlled: value and onChange are passed from parent.
 * - Keeps UI logic minimal and styling modular.
 */
const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    placeholder = "Search for country...",
}) => {
    // Event handler for when the user types in the input box
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value); // Pass the updated value back to the parent
    };

    return (
        <input 
            type="text"
            className={styles.SearchInput} // Apply local CSS module class
            value={value} // Controlled input value
            onChange={handleInputChange} // Trigger on every keystroke
            placeholder={placeholder} // Show guidance text
            aria-label="Search countries" // Accessibility label
        />
    );
};

export default SearchInput;