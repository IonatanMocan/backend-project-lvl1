const brainCalcGame = {
  gameRule: 'What is the result of the expression?',
  generatedQuestion() {
    const firstNum = Math.round(Math.random() * 10);
    const secondNum = Math.round(Math.random() * 10);
    const operations = ['+', '-', '*'];
    const randomUptoThree = Math.round(Math.random(3));
    return `${firstNum} ${operations[randomUptoThree]} ${secondNum}`;
  },
  getRightAnswer(question) {
    return eval(question).toString();
  },
};
export default brainCalcGame;
