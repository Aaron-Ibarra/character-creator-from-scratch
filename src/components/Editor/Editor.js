import React from 'react';
import './Editor.css';

export default function Editor({
  setCharacter,
  setKart,
  setWheels,
  incrementCharacter,
  incrementKart,
  incrementWheels,
}) {
  const handleCharacterChange = (e) => {
    setCharacter(e.target.value);
    incrementCharacter((characterChange) => characterChange + 1);
  };

  const handleKartChange = (e) => {
    setKart(e.target.value);
    incrementKart((kartChange) => kartChange + 1);
  };

  const handleWheelsChange = (e) => {
    setWheels(e.target.value);
    incrementWheels((wheelsChange) => wheelsChange + 1);
  };

  return (
    <div className="customize">
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
      <label>
        Wheels:
        <select onChange={handleWheelsChange}>
          <option value="standardTires">Standard</option>
          <option value="slickTires">Slick</option>
          <option value="monsterTires">Monster</option>
        </select>
      </label>
    </div>
  );
}
