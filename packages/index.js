#!/usr/bin/env node
import runProgram from "./scripts/runProgram.js";
import welcome from './ui/welcome.js'
import {generateProjectFull} from './scripts/generateProject.js';

runProgram(async (program) => {
  if (program.args.length == 0) {
    await welcome();
    return;
  }
});
