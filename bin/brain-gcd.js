#!/usr/bin/env node
import flow from '../src/index.js';
import { nod, condition } from '../games/nod.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

flow(condition, nod);