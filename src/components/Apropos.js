import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import './Apropos.css';

function Apropos() {
  return (
    <div className="apropos-card">
      <h2><FaUserGraduate /> À propos du projet</h2>
      <p>
        Cette application a été réalisée dans le cadre d'un mini-projet React. 
      </p>

      <ul>
        <li><strong>Réalisé par :</strong> Yassine Rachid (Groupe C)</li>
        <li><strong>Objectif :</strong> Afficher la météo via OpenWeather et rechercher des images via Pixabay.</li>
        <li>
          <strong>Technologies :</strong> React, Axios, React Router, CSS, OpenWeather API, Pixabay API.
        </li>
      </ul>

      <h3>Fonctionnalités principales :</h3>
      <ul>
        <li>Mode sombre/clair pour une meilleure expérience utilisateur.</li>
        <li>Recherche dynamique de villes pour obtenir les données météorologiques.</li>
        <li>Galerie d'images récupérées via l'API Pixabay.</li>
        <li>Design responsive adapté à tous les appareils.</li>
      </ul>
    </div>
  );
}

export default Apropos;