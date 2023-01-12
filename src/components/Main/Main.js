import React from 'react';
import './Main.css';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import Stats from '../Stats/Stats';

export default function Main() {
  return (
    <main>
      <div className="left">
        <Editor />
        <Stats />
      </div>
      <Preview />
    </main>
  );
}
