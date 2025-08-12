import React, { type ChangeEvent } from "react";
import styles from './RegionDropdown.module.css';

// Props definition for RegionDropDown
interface RegionDropDownProps {
    value: string; // Current selected region (e.g., "Africa", "Asia")
    onChange: (value: string) => void; // Callback to update selected region
    options: string[]; // Array of available region names
}

/**
 * RegionDropdown Component
 * - Controlled select dropdown for filtering countries by region.
 * - Receives list of options from parent, allowing flexibility.
 * - Minimal internal logic, focusing on rendering and event handling.
 */
const RegionDropDown: React.FC<RegionDropDownProps> = ({
    value,
    onChange,
    options,
}) => {
    // Event handler for dropdown change
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value); // Pass new selection to parent
    };

    return (
        <select
            className={styles.RegionDropDown} // Apply scoped CSS module styles
            value={value} // Controlled value from parent
            onChange={handleSelectChange} // Trigger callback on change
            aria-label="Filter by region" // Accessibility label
        >
            <option value="">Filter by Region</option>
            {options.map((region) => (
                <option value={region} key={region}>
                    {region}
                </option>
            ))}
        </select>
    );
};

export default RegionDropDown;