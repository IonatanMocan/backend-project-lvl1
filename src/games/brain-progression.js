import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const getProgressionAndSecretValue = ({
  initialNumber,
  step,
  length,
  randomIndex,
}) => {
  let firstNumber = initialNumber;
  const progressionArray = [];
  let gameAnswer;
  for (let i = 0; i < length; i += 1) {
    let itemToBeAdded;
    if (i === randomIndex) {
      itemToBeAdded = '..';
      gameAnswer = firstNumber.toString();
    } else {
      itemToBeAdded = firstNumber;
    }
    progressionArray.push(itemToBeAdded);
    firstNumber += step;
  }
  const gameQuestion = progressionArray.join(' ');
  return [gameQuestion, gameAnswer];
};

const getGameQuestionAndAnswer = () => {
  const progressionArrayLength = getRandomNumber(5, 15);
  const initialNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const randomIndex = getRandomNumber(0, progressionArrayLength - 1);
  const progressionArray = getProgressionAndSecretValue({
    initialNumber,
    step,
    length: progressionArrayLength,
    randomIndex,
  });

  const [gameQuestion, gameAnswer] = progressionArray;
  return [gameQuestion, gameAnswer];
};

const launchBrainProgressionGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainProgressionGame;
