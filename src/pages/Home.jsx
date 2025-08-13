import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Card from '../components/CountryCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../pages/Main.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    const matchesSearch = searchByName
      ? country.name.toLowerCase().includes(searchByName.toLowerCase())
      : true;
    return matchesRegion && matchesSearch;
  });

  return (
    <div className={`HomePage-Container ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className={`Main-Content ${darkMode ? 'Main-DarkMode' : 'Main-DarkMode-Off'}`}>
        <nav>
          <div className={`SearchBar ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="Search-Icon" />
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchByName}
              onChange={(e) => setSearchByName(e.target.value)}
            />
          </div>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className={`custom-select ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}
          >
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </nav>

        <div className="Countries-Cards-Section">
          {loading ? (
            <p>Loading countries...</p>
          ) : (
            filteredCountries.map((country) => (
              <Card
                key={country.alpha3Code}
                logo={country.flags.svg}
                Title={country.name}
                Population={country.population}
                Region={country.region}
                Capital={country.capital}
                class={darkMode ? 'Dark-Mode-Cards' : 'Light-Mode-Cards'}
                onClick={() => navigate(`/info/${country.name}`)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
