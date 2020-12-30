#!/usr/bin/env node
import flow from '../src/index.js';
import { calc, condi } from '../games/calc.js';

flow(condi, calc);
