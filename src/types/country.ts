export interface Country {
    flagUrl: string; // URL of the country's flag image
    name: string; // Country Name
    population: string; // Population formatted as a localized string
    region: string; // Region name (e.g., Europe, Asia)
    capital: string; // Capital city name (empty string if none)
    code: string; // Country code (e.g., "US", "GB")
}