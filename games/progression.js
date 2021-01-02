import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const condition = () => console.log('What number is missing in the progression?');

const res = [];

const func = () => {
  const arr = [];

  let start = randomInt(70);
  const r = randomInt(6);
  const x = randomInt(10);
  for (let i = 0; i < 10; i += 1, start += r) {
    if (i === x) {
      arr.push('..');
      res.push(start);
    } else {
      arr.push(start);
    }
  }
  return (arr.join(' '));
};

export const progress = () => {
  console.log(`Question: ${func()}`);
  const answer = readlineSync.question('Your answer: ');
  const result = res.pop();
  const pair = cons(answer, result);
  const tmp = (Number(answer) === result) ? true : pair;
  return tmp;
};
