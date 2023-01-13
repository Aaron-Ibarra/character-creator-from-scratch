import React from 'react';
import './Editor.css';

export default function Editor({ setCharacter, setKart }) {
  const handleCharacterChange = (e) => {
    setCharacter(e.target.value);
  };

  const handleKartChange = (e) => {
    setKart(e.target.value);
  };

  return (
    <div className='customize'>
      <label>
        Character:
        <select onChange={handleCharacterChange}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="bowserJr">Bowser Jr.</option>
        </select>
      </label>
      <label>
        Kart:
        <select onChange={handleKartChange}>
          <option value="standard">Standard</option>
          <option value="dasher">B Dasher</option>
          <option value="koopa">Koopa Clown</option>
        </select>
      </label>
    </div>
  );
}
