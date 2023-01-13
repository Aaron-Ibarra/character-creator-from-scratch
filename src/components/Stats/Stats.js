import React from 'react';
import './Stats.css';

export default function Stats({ characterChange, kartChange, wheelsChange }) {
  return (
    <div className="info">
      <p className="stats">
        CHARACTER CHANGES: {characterChange} <br /> KART CHANGES: {kartChange} <br /> WHEELS
        CHANGES: {wheelsChange}
      </p>
      <ul className="catchphrases">Catchphrase</ul>
    </div>
  );
}
