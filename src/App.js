import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ImageSearch from './components/ImageSearch';
import WeatherSearch from './components/WeatherSearch';
import Apropos from './components/Apropos';

function App() {
  const [city, setCity] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleError = (error) => {
    setError('Erreur de chargement, veuillez réessayer plus tard.');
    console.error('Erreur API:', error);
  };

  return (
    <Router>
      {isLoading && (
        <div className="loader-screen" role="status">
          <h1>⚡Weather & Gallery</h1>
          
        </div>
      )}
      {!isLoading && (
        <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="container">
            {error && <div className="error-message">{error}</div>}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <WeatherSearch city={city} setCity={setCity} handleError={handleError} isDarkMode={darkMode} />
                    <ImageSearch city={city} handleError={handleError} isDarkMode={darkMode} />
                  </>
                }
              />
              <Route path="/apropos" element={<Apropos />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
