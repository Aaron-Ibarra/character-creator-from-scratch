import React from 'react';
import { useState } from 'react';

import './Main.css';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Stats from '../Stats/Stats';

export default function Main() {
  const [character, setCharacter] = useState('');

  return (
    <main>
      <div className="left">
        <Editor setCharacter={setCharacter} />
        <Stats />
      </div>
      <Preview character={character} />
    </main>
  );
}
