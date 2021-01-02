#!/usr/bin/env node
import flow from '../src/index.js';
import { nod, condition } from '../games/nod.js';

flow(condition, nod);
