import randomInt from '../get-random.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  let flag = true;
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
    }
  }
  return flag;
};
const upperBound = 50;

export const getQuestionAndAnswer = () => {
  const num = randomInt(upperBound);
  const trueOrFalse = getPrime(num);
  const question = `${num}`;
  const correctAnswer = (trueOrFalse) ? 'yes' : 'no';
  return [question, correctAnswer];
};
