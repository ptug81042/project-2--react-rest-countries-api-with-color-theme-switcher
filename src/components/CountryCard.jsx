import { Link } from "react-router-dom";
import "../Main.css";

export default function CountryCard({ country }) {
  return (
    <li>
      <Link to={`/info/${country.name.common}`}>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <div className="info-container">
          <h2>{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital ? country.capital.join(", ") : "N/A"}
          </p>
        </div>
      </Link>
    </li>
  );
}