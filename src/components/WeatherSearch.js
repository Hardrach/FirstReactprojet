import React, { useState } from 'react';
import './WeatherSearch.css';
import axios from 'axios';
import { OPENWEATHER_KEY } from '../utils/apiKeys';
import { FaCloudSun } from 'react-icons/fa';

const WeatherSearch = ({ setCity, isDarkMode }) => {
  const [city, setCityInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!city.trim()) {
      setError('Veuillez entrer une ville valide.');
      return;
    }
    setError('');
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_KEY}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        setCity(city);
      })
      .catch(() => setError('Ville non trouvée.'));
  };

  return (
    <div className={`weather-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2><FaCloudSun /> Météo</h2>
      <input
        type="text"
        placeholder="Saiser Votre Ville..."
        value={city}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
      {error && <p className="error-message">{error}</p>}
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>💨 Wind: {weather.wind.speed} km/h</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
