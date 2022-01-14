import isEven from './isEven.js';
import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameLogic = () => {
  const generatedValue = getRandomNumber(0, 100);
  const correctAnswer = isEven(generatedValue) ? 'yes' : 'no';
  return [generatedValue, correctAnswer];
};

const launchBrainEvenGame = () => {
  startGame(rule, gameLogic);
};

export default launchBrainEvenGame;
