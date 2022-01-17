import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => (b === 0 ? a.toString() : findGCD(b, a % b));

const getGameQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const gameAnswer = findGCD(firstNum, secondNum);

  const gameQuestion = `${firstNum} ${secondNum}`;
  return [gameQuestion, gameAnswer];
};

const launchBrainGCDGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainGCDGame;
