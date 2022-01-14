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
    let [first, , second] = question.split(' ');
    const [, sign] = question.split(' ');
    first = +first;
    second = +second;
    let result;
    if (sign === '+') {
      result = first + second;
    } else if (sign === '-') {
      result = first - second;
    } else {
      result = first * second;
    }
    return result.toString();
  },
};

const launchBrainCalcGame = () => {
  startGame(rules);
};

export default launchBrainCalcGame;
