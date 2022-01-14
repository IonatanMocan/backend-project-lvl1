import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

function isPrime(n) {
  if (Number.isNaN(n) || !Number.isFinite(n) || n % 1 || n < 2) return 'no';
  if (n % 2 === 0) return 'no';
  if (n % 3 === 0) return 'no';
  const squareRootOfN = Math.sqrt(n);
  for (let i = 5; i <= squareRootOfN; i += 6) {
    if (n % i === 0) return 'no';
    if (n % (i + 2) === 0) return 'no';
  }
  return 'yes';
}

const rules = {
  gameRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generatedQuestion() {
    return getRandomNumber(1000);
  },
  getRightAnswer(question) {
    return isPrime(question);
  },
};

const launchBrainPrimeGame = () => {
  startGame(rules);
};

export default launchBrainPrimeGame;
