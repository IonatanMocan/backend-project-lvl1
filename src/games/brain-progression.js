import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const getProgression = (
  initialNumber,
  step,
  progressionLength,
  randomIndex,
) => {
  let firstNumber = initialNumber;
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const itemToBeAdded = i === randomIndex ? '..' : firstNumber;
    progressionArray.push(itemToBeAdded);
    firstNumber += step;
  }
  return progressionArray.join(' ');
};

const getGameQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(5, 15);
  const initialNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const gameQuestion = getProgression(
    initialNumber,
    step,
    progressionLength,
    randomIndex,
  );

  const gameAnswer = (step * randomIndex + initialNumber).toString();
  return [gameQuestion, gameAnswer];
};

const launchBrainProgressionGame = () => {
  startGame(rule, getGameQuestionAndAnswer);
};

export default launchBrainProgressionGame;
