import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import '../pages/Main.css';

export default function Info() {
  const [darkMode, setDarkMode] = useState(false);
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const { countryN } = useParams();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const response = await fetch(`https://restcountries.com/v2/name/${countryN}?fullText=true`);
        const data = await response.json();
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country:', error);
        setLoading(false);
      }
    }
    fetchCountry();
  }, [countryN]);

  if (loading) return <p style={{ padding: '50px', textAlign: 'center' }}>Loading...</p>;
  if (!country)
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <p>Country not found.</p>
        <Link to="/">Go back</Link>
      </div>
    );

  return (
    <div className={`Info-Page-Container ${darkMode ? 'Info-Page-Dark-Mode-On' : 'Info-Page-Dark-Mode-Off'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="Main-content">
        <Link to="/" className="Go-Back-Button-Container">
          <button className="Go-Back-Button">
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
          </button>
        </Link>

        <div className="Country-Flag">
          <img src={country.flags.svg} alt={country.name} />
        </div>

        <div className="Country-Information">
          <h1>{country.name}</h1>
          <div className="Country-Details">
            <ul>
              <li>Native Name: <span>{country.nativeName}</span></li>
              <li>Population: <span>{country.population.toLocaleString()}</span></li>
              <li>Region: <span>{country.region}</span></li>
              <li>Sub Region: <span>{country.subregion}</span></li>
              <li>Capital: <span>{country.capital}</span></li>
            </ul>
            <ul>
              <li>Top Level Domain: <span>{country.topLevelDomain.join(', ')}</span></li>
              <li>Currencies: <span>{country.currencies.map(c => c.name).join(', ')}</span></li>
              <li>Languages: <span>{country.languages.map(l => l.name).join(', ')}</span></li>
            </ul>
          </div>

          <div className="BorderCountries-Container">
            <div className="label-border-countries">Border Countries:</div>
            <div>
              {country.borders?.map((code) => (
                <Link key={code} to={`/info/${code}`}>
                  <button className="BorderCountry-Button">{code}</button>
                </Link>
              )) || <span>No bordering countries</span>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
