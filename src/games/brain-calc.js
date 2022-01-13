import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = {
  gameRule: 'What is the result of the expression?',
  generatedQuestion() {
    const firstNum = getRandomNumber(10);
    const secondNum = getRandomNumber(10);
    const operations = ['+', '-', '*'];
    const randomUptoThree = getRandomNumber(3);
    return `${firstNum} ${operations[randomUptoThree]} ${secondNum}`;
  },
  getRightAnswer(question) {
    return eval(question).toString();
  },
};

const brainCalcGame = () => {
  startGame(rules);
};

export default brainCalcGame;
