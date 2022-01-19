import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';

const getGameQuestionAndAnswer = () => {
  const firstNum = getRandomNumber(0, 10);
  const secondNum = getRandomNumber(0, 10);
  const operations = ['+', '-', '*'];
  const sign = operations[getRandomNumber(0, operations.length - 1)];

  let result;
  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;

    case '-':
      result = firstNum - secondNum;
      break;

    case '*':
      result = firstNum * secondNum;
      break;

    default:
      throw new Error('unhandled case for an arithmetic operator');
  }
  const gameQuestion = `${firstNum} ${sign} ${secondNum}`;
  const gameAnswer = result.toString();
  return [gameQuestion, gameAnswer];
};

const launchBrainCalcGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainCalcGame;
