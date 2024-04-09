import loadTemplate from '../utils/loadTemplate.js'
import path from 'path'
import { mkdirSync } from 'fs'
export default async function createApp(projectName, answer) {
  // 在当前目录创建新项目文件夹
  // projectName就是用户输入的项目名称
  const projectPath = path.join(process.cwd(), projectName)
  console.log(projectPath)

  // 创建文件夹方法
  mkdirSync(projectPath)

  await loadTemplate(projectPath)
}
