import { words } from "./words";

export function generateRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
export function getFaerwellText(language) {
  const options = [
    `Farewell, ${language}`,
    `Adios, ${language}`,
    `R.I.P, ${language}`,
    `We'll miss you, ${language}`,
    `oh no, not ${language}`,
    `${language} bit the dust`,
    `The end of ${language} as we know it`,
    `0ff into the sunset, ${language}`,
    `${language}, its been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
  ];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
