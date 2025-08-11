// Filter state for countries list
export interface FilterContextType {
    search: string; // Search input text
    region: string; // Selected region filter
    setSearch: (search: string) => void; // Setter for search string
    setRegion: (region: string) => void; // Setter for region filter
}