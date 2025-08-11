// Represents the raw country data shape exactly as returned by the REST Countries API
export interface RawCountry {
    flags: {
        png: string;
        svg?: string;
    };
    name: {
        common: string;
        official?: string;
        nativeName?: Record<string, { official: string; common: string }>;
    };
    population: number;
    region: string;
    capital?: string[];
    cca2: string;
}