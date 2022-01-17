import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';

const getGameQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(0, 10);
  const secondNum = getRandomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const sign = operations[getRandomNumber(0, 2)];

  let result;
  if (sign === '+') {
    result = firstNum + secondNum;
  } else if (sign === '-') {
    result = firstNum - secondNum;
  } else {
    result = firstNum * secondNum;
  }
  const gameQuestion = `${firstNum} ${sign} ${secondNum}`;
  const gameAnswer = result.toString();
  return [gameQuestion, gameAnswer];
};

const launchBrainCalcGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainCalcGame;
