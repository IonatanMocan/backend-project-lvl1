import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const gameQuestion = getRandomNumber(0, 100);
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const launchBrainEvenGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainEvenGame;
