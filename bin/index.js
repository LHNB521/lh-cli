#!/usr/bin/env node

import { program } from 'commander'
import { logGreen } from '../utils/log.js'
import { create } from './create.js'

program.command('create <projectName>').action((projectName) => {
  logGreen(`正在准备创建项目 ${projectName}`)
  // 执行创建
  create(projectName)
})
program.parse()
