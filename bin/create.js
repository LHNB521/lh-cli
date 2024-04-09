import { logGreen, logYellow } from '../utils/log.js'
import inquirer from 'inquirer'
import createApp from '../lib/commands/createApp.js'

export async function create(projectName) {
  // 询问用户
  const answer = await inquirer.prompt([
    // {
    //   type: 'confirm',
    //   name: 'confiremCreate',
    //   message: `您是否要创建名为 ${projectName} 的vue3项目?`,
    //   default: true,
    // },
    {
      type: 'list',
      name: 'projectType',
      message: '请选择您的创建方式?',
      choices: ['现成项目模板', '定制项目模板'],
    },
  ])
  console.log(answer)
  // // 创建项目
  // if (answer.confiremCreate) {
  //   logYellow('开始创建项目...')
  //   createApp(projectName, answer)
  // } else {
  //   logGreen('取消创建')
  // }
}
