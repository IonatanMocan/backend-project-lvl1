import readlineSync from 'readline-sync';
import getName from './getName.js';

const numberOfRounds = 3;

const startGame = (rule, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(rule);

  let failure = false;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [generatedValue, correctAnswer] = gameLogic();

    console.log(`Question: ${generatedValue}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      failure = true;
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (!failure) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
