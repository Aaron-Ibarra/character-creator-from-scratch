import React from 'react';
import './Editor.css';

export default function Editor({ setCharacter }) {
  const handleCharacterChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div>
      <label>
        Character:
        <select onChange={handleCharacterChange}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="bowserJr">Bowser Jr.</option>
        </select>
      </label>
    </div>
  );
}
