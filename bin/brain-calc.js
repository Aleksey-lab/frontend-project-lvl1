#!/usr/bin/env node
import { description, getQuestionAndAnswer } from '../src/games/calc.js';
import flow from '../src/index.js';

flow(description, getQuestionAndAnswer);
