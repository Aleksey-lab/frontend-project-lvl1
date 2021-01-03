/* eslint-disable indent */
import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export function condition() {
    return console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

export function getPrime(num) {
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
}

export function prime() {
    const num = randomInt(50);
    const randInt = getPrime(num);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const res = (answer === 'yes') ? 'no' : 'yes';
    const pair = cons(answer, res);
    const tmp = ((randInt && answer === 'yes') || (!randInt && answer === 'no')) ? true : pair;
    return tmp;
}
