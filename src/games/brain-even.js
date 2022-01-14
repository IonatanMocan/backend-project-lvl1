import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = {
  gameRule: 'Answer "yes" if the number is even, otherwise answer "no".',
  generatedQuestion() {
    return getRandomNumber(0, 100);
  },
  getRightAnswer(question) {
    return question % 2 === 0 ? 'yes' : 'no';
  },
};

const launchBrainEvenGame = () => {
  startGame(rules);
};

export default launchBrainEvenGame;
