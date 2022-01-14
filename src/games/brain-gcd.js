import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => (b === 0 ? a.toString() : findGCD(b, a % b));

const generateValue = () => {
  const first = getRandomNumber(1, 100);
  const second = getRandomNumber(1, 100);
  return `${first} ${second}`;
};

const getRightAnswer = (question) => {
  const [first, second] = question.split(' ');
  return findGCD(first, second);
};

const gameLogic = () => {
  const generatedValue = generateValue();
  const correctAnswer = getRightAnswer(generatedValue);

  return [generatedValue, correctAnswer];
};

const launchBrainGCDGame = () => {
  startGame(rule, gameLogic);
};

export default launchBrainGCDGame;
