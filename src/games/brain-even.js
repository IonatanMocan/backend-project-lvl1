const brainEvenGame = {
  gameRule: 'Answer "yes" if the number is even, otherwise answer "no".',
  generatedQuestion() {
    return Math.round(Math.random() * 100);
  },
  getRightAnswer(question) {
    return question % 2 === 0 ? 'yes' : 'no';
  },
};

export default brainEvenGame;
