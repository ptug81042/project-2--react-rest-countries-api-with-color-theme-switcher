// src/pages/CountryDetailPage/CountryDetailPage.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCountries } from "../../contexts/CountriesContext/useCountries";
import styles from "./CountryDetailPage.module.css";

const CountryDetailPage: React.FC = () => {
    // Get country code from URL params
    const { code } = useParams<{ code: string }>();
    const navigate = useNavigate();

    // Access countries data from context
    const { countries, loading, error } = useCountries();

    // Find the country matching the code
    const country = countries.find((c) => c.code === code);

    if (loading) return <p>Loading country data...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!country) return <p>Country not found.</p>;

    return (
        <main className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.backButton}>
                &larr; Back
            </button>
            <div className={styles.detail}>
                <img
                    src={country.flagUrl}
                    alt={`Flag of ${country.name}`}
                    className={styles.flag}
                />
                <div className={styles.info}>
                    <h1>{country.name}</h1>
                    <p>
                        <strong>Population:</strong> {country.population}
                    </p>
                    <p>
                        <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                        <strong>Capital:</strong> {country.capital || "N/A"}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default CountryDetailPage;