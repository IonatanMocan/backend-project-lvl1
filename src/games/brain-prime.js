import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateValue = () => getRandomNumber(1, 100);
const getRightAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const gameLogic = () => {
  const generatedValue = generateValue();
  const correctAnswer = getRightAnswer(generatedValue);
  return [generatedValue, correctAnswer];
};

const launchBrainPrimeGame = () => {
  startGame(rule, gameLogic);
};

export default launchBrainPrimeGame;
