import download from 'download-git-repo'
import repo from '../../templates/repo.js'

export default function loadTemplate(projectPath) {
  return new Promise((resolve, reject) => {
    // download-git-repo下载项目的方法，本地测试可以改为node复制本地项目
    download(repo['lh_vue3-ts'].downloadUrl, projectPath, function (error) {
      if (error) {
        console.log(error)
        reject(error)
        return
      }
      resolve()
    })
  })
}
