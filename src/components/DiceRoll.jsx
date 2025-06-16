import { useState } from "react";

export default function DiceRoll() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <div className="dice-container">
      <h2>Digital Dice Roll</h2>
      <p className="random-number">Current Roll: <strong>{randomNumber}</strong></p>
      <button onClick={() => setRandomNumber(generateRandomNumber())}>
        Roll Again
      </button>
    </div>
  );
}