import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = {
  gameRule: 'Find the greatest common divisor of given numbers.',
  generatedQuestion() {
    const first = getRandomNumber(0, 100);
    const second = getRandomNumber(0, 100);
    return `${first} ${second}`;
  },
  getRightAnswer(question) {
    const [first, second] = question.split(' ');
    const gcd = (a, b) => {
      if (!b) {
        return a.toString();
      }

      return gcd(b, a % b);
    };
    return gcd(first, second);
  },
};

const launchBrainGCDGame = () => {
  startGame(rules);
};

export default launchBrainGCDGame;
