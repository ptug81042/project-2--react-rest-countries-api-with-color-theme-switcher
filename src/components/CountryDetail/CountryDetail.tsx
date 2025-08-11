import React from "react";
import DetailInfo from "./DetailInfo";
import BorderCountries from "./BorderCountries";
import type { Country } from "../../types/country";
import styles from './CountryDetail.module.css';

interface CountryDetailProps {
    country: Country;
    borderCountries: Country[];
    onBorderCountryClick: (code: string) => void;
}

/**
 * CountryDetail component displays detailed info about a selected country,
 * including flag, name, population, region, capital, and bordering countries.
 */
const CountryDetail: React.FC<CountryDetailProps> = ({
    country,
    borderCountries,
    onBorderCountryClick,
}) => {
    return (
        <section className={styles.container}>
            <img 
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className={styles.flag}
            />
            <div className={styles.info}>
                <h2>{country.name}</h2>
                <DetailInfo label="Population" value={country.population} />
                <DetailInfo label="Region" value={country.region} />
                <DetailInfo label="Capital" value={country.capital || "N/A"} />
                <BorderCountries 
                    borderCountries={borderCountries}
                    onBorderCountryClick={onBorderCountryClick}
                />
            </div>
        </section>
    );
};

export default CountryDetail;