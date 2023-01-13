import React from 'react';
import { useState } from 'react';

import './Main.css';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Stats from '../Stats/Stats';

export default function Main() {
  const [character, setCharacter] = useState('mario');
  const [characterChange, incrementCharacter] = useState(0);

  const [kart, setKart] = useState('standard');
  const [kartChange, incrementKart] = useState(0);

  const [wheels, setWheels] = useState('standardTires');
  const [wheelsChange, incrementWheels] = useState(0);

  return (
    <main>
      <div className="left">
        <Editor
          setCharacter={setCharacter}
          setKart={setKart}
          setWheels={setWheels}
          incrementWheels={incrementWheels}
          incrementKart={incrementKart}
          incrementCharacter={incrementCharacter}
          wheelsChange={wheelsChange}
          kartChange={kartChange}
          characterChange={characterChange}
        />
        <Stats
          wheelsChange={wheelsChange}
          kartChange={kartChange}
          characterChange={characterChange}
        />
      </div>
      <Preview character={character} kart={kart} wheels={wheels} />
    </main>
  );
}
