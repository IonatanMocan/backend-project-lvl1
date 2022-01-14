import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const generateValue = () => {
  const step = getRandomNumber(1, 10);
  const randomIndexInArray = getRandomNumber(0, 9);
  let start = getRandomNumber(0, 10);
  const result = [];

  for (let i = 0; i < 10; i += 1) {
    if (i === randomIndexInArray) {
      result.push('..');
      start += step;
    } else {
      result.push(start);
      start += step;
    }
  }
  return result.join(' ');
};

const getRightAnswer = (question) => {
  const array = question.split(' ');
  const indexOfMissingValue = array.findIndex((element) => element === '..');
  let missingValue;
  if (indexOfMissingValue >= array.length - 2) {
    const difference = array[indexOfMissingValue - 1] - array[indexOfMissingValue - 2];
    missingValue = Number(array[indexOfMissingValue - 1]) + difference;
  } else {
    const difference = array[indexOfMissingValue + 2] - array[indexOfMissingValue + 1];
    missingValue = Number(array[indexOfMissingValue + 1]) - difference;
  }
  return missingValue.toString();
};

const gameLogic = () => {
  const generatedValue = generateValue();
  const correctAnswer = getRightAnswer(generatedValue);

  return [generatedValue, correctAnswer];
};

const launchBrainProgressionGame = () => {
  startGame(rule, gameLogic);
};

export default launchBrainProgressionGame;
