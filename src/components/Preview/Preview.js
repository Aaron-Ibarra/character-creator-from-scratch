import React from 'react';
import './Preview.css';

// import mario from './public/characters/mario.webp';

export default function Preview({ character, kart }) {
  return (
    <div className="images">
      <img src={`${process.env.PUBLIC_URL}/characters/${character}.webp`} />
      <img src={`${process.env.PUBLIC_URL}/karts/${kart}.webp`} />
    </div>
  );
}
