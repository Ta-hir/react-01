import "../css/endgame.css";
import clsx from "clsx";
import { languages } from "../../../languages";
import { useState } from "react";
import { getFaerwellText, generateRandomWord } from "../utils";
import ConfettiExplosion from "react-confetti-explosion";

export default function EndgameApp() {
  // state values
  const numberOfGuessesLeft = languages.length - 1;
  const [currentWord, setCurrentWord] = useState(() => generateRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const alpahabet = "abcdefghijklmnopqrstuvwxyx";

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numberOfGuessesLeft;
  const isGameOver = isGameWon || isGameLost;

  function addGuessedLetters(letter) {
    setGuessedLetters((prevLetters) => {
      return prevLetters.includes(letter)
        ? prevLetters
        : [...prevLetters, letter];
    });
  }
  const letterEl = currentWord.split("").map((letter, index) => {
    const revealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      "letter",
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={letterClassName}>
        {revealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const keybordLEtters = alpahabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        disabled={isGameOver}
        onClick={() => addGuessedLetters(letter)}
      >
        {letter}
      </button>
    );
  });

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
  });

  function resetGame() {
    setCurrentWord(generateRandomWord);
    setGuessedLetters([]);
  }

  return (
    <main>
      {isGameOver && (
        <ConfettiExplosion recycles={false} numberOfPieces={100} />
      )}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word with 8 attemts to keep the programming world safe from
          Assembly
        </p>
      </header>
      <section className="status-section">
        <div className={gameStatusClass}>
          {isGameOver ? (
            isGameWon ? (
              <>
                <p>well done 🎊🎊 </p>
                <p>you win</p>
              </>
            ) : (
              <>
                <p>Game over </p>
                <p>you lose better start learning assembly😂😂</p>
              </>
            )
          ) : null}
        </div>
      </section>
      <section className="language-chips">
        {languages.map((language, index) => {
          const isLanguageLost = index < wrongGuessCount;
          const className = clsx("chip", isLanguageLost && "lost");
          return (
            <span
              key={language.name}
              className={className}
              style={{
                backgroundColor: language.backgroundColor,
                color: language.color,
              }}
            >
              {language.name}
            </span>
          );
        })}
      </section>
      <section className="word">{letterEl}</section>
      <section className="keybord">{keybordLEtters}</section>
      <div className="new-game-btn">
        {isGameOver && <button onClick={resetGame}>New Game</button>}
      </div>
    </main>
  );
}
