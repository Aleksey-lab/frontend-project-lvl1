#! /usr/bin/env node
import flow from '../src/index.js';
import { progress, condition } from '../games/progression.js';

flow(condition, progress);
