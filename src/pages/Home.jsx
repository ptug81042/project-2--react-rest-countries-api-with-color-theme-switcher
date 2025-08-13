import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import "../Main.css";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all??fields=name,flags,region,capital,population,cca3")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => (region ? c.region === region : true));

  return (
    <main>
      <div className="filters">
        <div className="input-field">
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <ul className="countries">
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </ul>
    </main>
  );
}