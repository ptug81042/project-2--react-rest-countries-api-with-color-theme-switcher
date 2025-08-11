// Represents the simplified country data used in the app UI
export interface FormattedCountry {
    flagUrl: string;    // URL to flag image
    name: string;       // Common country name
    population: string; // Formatted population string
    region: string;     // Region name
    capital: string;    // Capital(s) as comma-separated string or "N/A"
    code: string;       // Country code (cca2)
}