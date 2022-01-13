const brainProgressionGame = {
  gameRule: 'Find the greatest common divisor of given numbers.',
  generatedQuestion() {
    const step = Math.round(Math.random() * 10);
    const randomPlace = Math.round(Math.random(8) * 10);
    let start = Math.round(Math.random() * 10);
    const result = [];

    for (let i = 0; i < 10; i += 1) {
      if (i === randomPlace) {
        result.push('..');
        start += step;
      } else {
        result.push(start);
        start += step;
      }
    }
    return result.join(' ');
  },
  getRightAnswer(question) {
    const array = question.split(' ');
    const indexOfMissingValue = array.findIndex((element) => element === '..');
    let missingValue;
    if (indexOfMissingValue >= array.length - 2) {
      const difference =
        array[indexOfMissingValue - 1] - array[indexOfMissingValue - 2];
      missingValue = Number(array[indexOfMissingValue - 1]) + difference;
    } else {
      const difference =
        array[indexOfMissingValue + 2] - array[indexOfMissingValue + 1];
      missingValue = Number(array[indexOfMissingValue + 1]) - difference;
    }
    return missingValue.toString();
  },
};

export default brainProgressionGame;
