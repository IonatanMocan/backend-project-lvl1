import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const getGameQuestionAndAnswer = () => {
  const progressionArrayLength = getRandomNumber(5, 15);
  let initialNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const randomIndexInArray = getRandomNumber(0, progressionArrayLength - 1);
  const progressionArray = [];
  let gameAnswer;
  for (let i = 0; i < progressionArrayLength; i += 1) {
    if (i === randomIndexInArray) {
      progressionArray.push('..');
      gameAnswer = initialNumber.toString();
      initialNumber += step;
    } else {
      progressionArray.push(initialNumber);
      initialNumber += step;
    }
  }

  const gameQuestion = progressionArray.join(' ');

  return [gameQuestion, gameAnswer];
};

const launchBrainProgressionGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainProgressionGame;
