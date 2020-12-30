#!/usr/bin/env node
import flow from '../src/index.js';
import { even, condition } from '../games/even.js';

flow(condition, even);
