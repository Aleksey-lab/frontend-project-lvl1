import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(50));

export const condition = () => console.log('Answer "yes" if the number is even, otherwise answer "no" ');

export const even = () => {
  const int = getRandomInt();
  console.log(`Question: ${int}`);
  const answer = readlineSync.question('Your answer: ');
  const res = (answer === 'yes') ? 'no' : 'yes';
  const pair = cons(answer, res);
  const tmp = (
    (int % 2 === 0 && answer === 'yes')
    || (int % 2 !== 0 && answer === 'no')
  ) ? true : pair;

  return tmp;
};
