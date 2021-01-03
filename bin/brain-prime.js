#! /usr/bin/env node
import flow from '../src/index.js';
import { prime, condition } from '../games/prime.js';

flow(condition, prime);
