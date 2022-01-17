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

const getGameQuestionAndAnswer = () => {
  const gameQuestion = getRandomNumber(1, 100);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const launchBrainPrimeGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainPrimeGame;
