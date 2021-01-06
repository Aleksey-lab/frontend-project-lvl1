import randomInt from '../get-random.js';

export const description = 'What number is missing in the progression?';

const array = [];

const progression = () => {
  const arr = [];
  const upperBound = 70;
  const bottomBound = 15;
  const increase = randomInt(0, 10);
  const ranNum = randomInt(0, 10);
  let number = randomInt(bottomBound, upperBound);
  for (let i = 0; i < 10; i += 1, number += increase) {
    if (i === ranNum) {
      arr.push('..');
      array.push(number);
    } else {
      arr.push(number);
    }
  }
  return (arr.join(' '));
};

export const getQuestionAndAnswer = () => {
  const question = `${progression()}`;
  const correctAnswer = array.pop();
  return [question, correctAnswer];
};
