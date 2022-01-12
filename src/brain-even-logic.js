import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 100);
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const brainEvenLogic = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() === isEven(randomNumber)) {
      console.log('Correct!');
      rightAnswers += 1;
      if (rightAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
        break;
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(randomNumber)}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default brainEvenLogic;
