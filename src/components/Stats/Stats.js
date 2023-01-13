import React from 'react';
import './Stats.css';

export default function Stats({ characterChange }) {
  return (
    <div className="info">
      <p className="stats">{characterChange}</p>
      <ul className="catchphrases">Catchphrase</ul>
    </div>
  );
}
