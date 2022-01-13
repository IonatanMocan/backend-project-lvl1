import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = {
  gameRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generatedQuestion() {
    return getRandomNumber(1000);
  },
  getRightAnswer(question) {
    if (question <= 3) return question > 1;

    if (question % 2 === 0 || question % 3 === 0) return 'no';

    let count = 5;

    while (count ** 2 <= question) {
      if (question % count === 0 || question % (count + 2) === 0) return 'no';

      count += 6;
    }

    return 'yes';
  },
};

const brainPrimeGame = () => {
  startGame(rules);
};

export default brainPrimeGame;
