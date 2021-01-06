#!/usr/bin/env node
import flow from '../src/index.js';
import { description, getQuestionAndAnswer } from '../src/games/nod.js';

flow(description, getQuestionAndAnswer);
