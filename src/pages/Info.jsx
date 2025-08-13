import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Main.css";

export default function Info() {
  const { countryN } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryN}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
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
            {country.borders?.map((border) => (
              <Link key={border} to={`/info/${border}`} className="detail-link">
                {border}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}