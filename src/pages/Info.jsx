import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Main.css";

export default function Info() {
  const { countryN } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryN}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        // Fetch border country names if borders exist
        if (data[0]?.borders?.length) {
          fetch(`https://restcountries.com/v3.1/alpha?codes=${data[0].borders.join(',')}`)
            .then(res => res.json())
            .then(borderData => setBorderCountries(borderData))
            .catch(err => setBorderCountries([]));
        } else {
          setBorderCountries([]);
        }
      })
      .catch((err) => console.error(err));
  }, [countryN]);

  if (!country) return <div>Loading...</div>;

  return (
    <main>
      <Link to="/" className="detail-link">
        ← Back
      </Link>
      <section className="border-countries">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
        />
        <div className="detail-info-container">
          <h2>{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}</p>
          <p>
            <strong>Capital:</strong> {country.capital ? country.capital.join(", ") : "N/A"}
          </p>
          <div className="border-countries">
            <span>Border Countries:</span>
            {borderCountries.length > 0
              ? borderCountries.map((borderCountry) => (
                  <Link
                    key={borderCountry.cca3}
                    to={`/info/${borderCountry.name.common}`}
                    className="detail-link"
                  >
                    {borderCountry.name.common}
                  </Link>
                ))
              : <span>N/A</span>
            }
          </div>
        </div>
      </section>
    </main>
  );
}