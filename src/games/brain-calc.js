import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';

const generateValue = () => {
  const firstNum = getRandomNumber(0, 10);
  const secondNum = getRandomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const randomUptoThree = getRandomNumber(0, 2);
  return `${firstNum} ${operations[randomUptoThree]} ${secondNum}`;
};

const getRightAnswer = (question) => {
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
};

const gameLogic = () => {
  const generatedValue = generateValue();
  const correctAnswer = getRightAnswer(generatedValue);

  return [generatedValue, correctAnswer];
};

const launchBrainCalcGame = () => {
  startGame(rule, gameLogic);
};

export default launchBrainCalcGame;
