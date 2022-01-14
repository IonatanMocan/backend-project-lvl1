import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const findGCD = (a, b) => (!b ? a.toString() : findGCD(b, a % b));

const rules = {
  gameRule: 'Find the greatest common divisor of given numbers.',
  generatedQuestion() {
    const first = getRandomNumber(1, 100);
    const second = getRandomNumber(1, 100);
    return `${first} ${second}`;
  },
  getRightAnswer(question) {
    const [first, second] = question.split(' ');
    return findGCD(first, second);
  },
};

const launchBrainGCDGame = () => {
  startGame(rules);
};

export default launchBrainGCDGame;
