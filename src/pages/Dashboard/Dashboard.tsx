import React from "react";
import { useCountries } from "../../contexts/CountriesContext/useCountries";
import { useFilter } from "../../contexts/FilterContext/useFilter";
import { useDebounce } from "../../hooks/useDebounce";
import { type Country } from '../../types/country';
import CountryCard from '../../components/CountryCard/CountryCard';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
    // Get countries data loading/error states from context
    const { countries, loading, error } = useCountries();

    // Get search and region filter values from Filter context
    const { search, region } = useFilter();

    // Debounce search input to avoid excessive filtering
    const debouncedSearch = useDebounce(search, 300);

    // Filter countries by region and search term (case-insensitive)
    const filteredCountries = countries.filter((country: Country) => {
        const matchesRegion = region === "" || country.region === region;
        const matchesSearch = debouncedSearch === "" || country.name.toLowerCase().includes(debouncedSearch.toLowerCase());
        return matchesRegion && matchesSearch;
    });

    if (loading) return <p className={styles.message}>Loading countries...</p>
    if (error) return <p className={styles.message}>Error: {error}</p>

    return (
        <main className={styles.container}>
            {filteredCountries.length === 0 ? (
                <p className={styles.message}>No countries match your criteria.</p>
            ) : (
                <section className={styles.grid}>
                    {filteredCountries.map((country) => (
                        <CountryCard key={country.code} country={country} />
                    ))}
                </section>
            )}
        </main>
    );
};

export default Dashboard;