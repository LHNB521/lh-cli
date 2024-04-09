#!/usr/bin/env node

import { program } from 'commander';
import { logGreen } from '../utils/log.js';

program
  .command('create <projectName>')
  .action((projectName) => {
    logGreen(`创建项目 ${projectName}`);
  });
program.parse();
