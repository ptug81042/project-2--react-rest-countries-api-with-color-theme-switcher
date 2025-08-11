import React from "react";
import styles from "./CountryCard.module.css";
import type { Country } from "../../types/CountriesContext";

interface CountryCardProps {
    country: Country;
}

/**
 * CountryCard displays a summary of a single country
 * including its flag, name, population, region, and capital.
 */
const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    return (
        <article className={styles.card} tabIndex={0} aria-label={`Country card for ${country.name}`}>
            <img 
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className={styles.flag}
                loading="lazy"
            />
            <div className={styles.info}>
                <h2 className={styles.name}>{country.name}</h2>
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
        </article>
    );
};

export default CountryCard;