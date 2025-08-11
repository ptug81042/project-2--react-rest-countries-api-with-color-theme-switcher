// Define types for FilterContext

/**
 * FilterContext's value shape
 */
export interface FilterContextType {
    search: string; // search input string
    region: string; // selected region string
    setSearch: (search: string) => void; // setter for search string
    setRegion: (region: string) => void; // setter for region string
}