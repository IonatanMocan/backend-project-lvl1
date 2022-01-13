import readlineSync from 'readline-sync';
import getName from './getName.js';

const numberOfRounds = 3;

const startGame = ({ gameRule, generatedQuestion, getRightAnswer }) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  let failure = false;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = generatedQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (getRightAnswer(question) === answer) {
      console.log('Correct!');
    } else {
      failure = true;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${getRightAnswer(
          question,
        )}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (!failure) {
    console.log(`Congratulations, ${name}`);
  }
};

export default startGame;
