import React from 'react';
import { useState } from 'react';

import './Main.css';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Stats from '../Stats/Stats';

export default function Main() {
  const [character, setCharacter] = useState('mario');
  const [kart, setKart] = useState('standard');
  const [wheels, setWheels] = useState('standardTires');

  return (
    <main>
      <div className="left">
        <Editor setCharacter={setCharacter} setKart={setKart} setWheels={setWheels} />
        <Stats />
      </div>
      <Preview character={character} kart={kart} wheels={wheels} />
    </main>
  );
}
