// Combines SearchInput and RegionDropdown into a single filter bar UI
// Receives filter state and handlers from parent

import React from "react";
import SearchInput, { type SearchInputProps } from "./SearchInput";
import RegionDropDown, { type RegionDropdownProps } from "./RegionDropdown";
import styles from "./Filters.module.css";

// Combined props from both child components
interface FilterProps {
    searchValue: SearchInputProps["value"];
    onSearchChange: SearchInputProps["onChange"];
    regionValue: RegionDropdownProps["value"];
    onRegionChange: RegionDropdownProps["onChange"];
    regionOptions: RegionDropdownProps["options"];
}

const Filters: React.FC<FilterProps> = ({
    searchValue,
    onSearchChange,
    regionValue,
    onRegionChange,
    regionOptions,
}) => {
    return (
        <div className={styles.filtersContainer}>
            {/* Search bar for country name */}
            <SearchInput value={searchValue} onChange={onSearchChange} />

            {/* Dropdown for region selection */}
            <RegionDropDown 
                value={regionValue}
                onChange={onRegionChange}
                options={regionOptions}
            />
        </div>
    );    
};

export default Filters;