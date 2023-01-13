import React from 'react';
import './Stats.css';

export default function Stats({ characterChange, kartChange, wheelsChange, catchphrase }) {
  return (
    <div className="info">
      <p className="stats">
        CHARACTER CHANGES: {characterChange} <br /> KART CHANGES: {kartChange} <br /> WHEELS
        CHANGES: {wheelsChange}
      </p>
      <h2>Catchphrases</h2>
      <ul className="catchphrases">
        {Object.entries(catchphrase).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
