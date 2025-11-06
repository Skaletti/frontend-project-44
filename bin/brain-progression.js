#!/usr/bin/env node
import { welcome, progressionGame } from '../index.js';

console.log('Welcome to the Brain Games!');

progressionGame(welcome());
