import { useState } from "react";
import { nanoid } from "nanoid";
import ConfettiExplosion from "react-confetti-explosion";

import Die from "./Die";

export default function TenziesMain() {
  const [dice, setDice] = useState(generateAllNewDice());
  let gameWon = false;
  if (
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value)
  ) {
    gameWon = true;
  }

  //   generating new dice values
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  //   rolling the dice
  function roll() {
    if (!gameWon) {
      setDice((prevDiceState) =>
        prevDiceState.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        })
      );
    } else {
      generateAllNewDice();
    }
  }

  //   hold function
  function hold(id) {
    setDice((prevDiceStat) =>
      prevDiceStat.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  //   winnig condition

  return (
    <main>
      {gameWon && <ConfettiExplosion />}
      <header>
        <h1>TENZIES</h1>
      </header>
      <div className="die-container">
        {dice.map((dieObj) => {
          return (
            <Die
              key={dieObj.id}
              value={dieObj.value}
              isHeld={dieObj.isHeld}
              handleClick={hold}
              id={dieObj.id}
            />
          );
        })}
      </div>
      <button className="roll-dice-btn" onClick={roll}>
        {gameWon ? "new game" : "roll"}
      </button>
    </main>
  );
}
