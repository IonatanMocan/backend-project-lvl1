const brainPrimeGame = {
  gameRule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generatedQuestion() {
    return Math.round(Math.random() * 1000);
  },
  getRightAnswer(question) {
    if (question <= 3) return question > 1;

    if (question % 2 === 0 || question % 3 === 0) return 'no';

    let count = 5;

    while (count ** 2 <= question) {
      if (question % count === 0 || question % (count + 2) === 0) return 'no';

      count += 6;
    }

    return 'yes';
  },
};

export default brainPrimeGame;
