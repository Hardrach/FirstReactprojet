import React, { useEffect, useState } from 'react';
import './ImageSearch.css';
import axios from 'axios';
import { PIXABAY_KEY } from '../utils/apiKeys';
import { FaCamera } from 'react-icons/fa';

const ImageSearch = ({ city }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${city}&image_type=photo&per_page=9`)
      .then((res) => {
        setImages(res.data.hits);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Erreur de chargement des images.');
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="image-gallery">
      <h2 className="Title_Galerie">
        <span className="galerie-icon"><FaCamera /></span>
        <span className="galerie-text">Galerie d’images</span>
      </h2>
        
      {!loading && !error && images.length === 0 && <p>Aucune image trouvée pour cette ville.</p>}
      <div className="image-grid">
        {images.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.webformatURL} alt={img.tags} />
            <button>More Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
