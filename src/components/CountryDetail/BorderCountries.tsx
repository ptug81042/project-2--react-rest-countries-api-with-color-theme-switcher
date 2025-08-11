import React from "react";
import styles from './BorderCountries.module.css';
import type { Country } from "../../types/country";

interface BorderCountriesProps {
    borderCountries: Country[];
    onBorderCountryClick: (code: string) => void;
}

/**
 * BorderCountries component lists the bordering countries for the selected country.
 * Clicking a button navigates to that country's detail view.
 */
const BorderCountries: React.FC<BorderCountriesProps> = ({
    borderCountries,
    onBorderCountryClick,
}) => {
    if (borderCountries.length === 0) {
        return (
            <div className={styles.container}>
                <strong>Border Countries:</strong> None
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <strong>Border Countries:</strong>
            <div className={styles.list}>
                {borderCountries.map((country) => (
                    <button
                        key={country.code}
                        className={styles.button}
                        onClick={() => onBorderCountryClick(country.capital)}
                    >
                        {country.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BorderCountries;