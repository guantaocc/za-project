const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())

// 获取绝对路径的方法函数
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx']

function resolveModule(resolveFn, filePath) {
  // Check if the file exists
  const extension = moduleFileExtensions.find((ex) =>
    fs.existsSync(resolveFn(`${filePath}.${ex}`))
  )

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }
  return resolveFn(`${filePath}.ts`) // default is .ts
}

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appIndex: resolveModule(resolveApp, 'src/index'), // Package entry path
  appHtml: resolveApp('public/index.html'),
  appNodeModules: resolveApp('node_modules'), // node_modules path
  appSrc: resolveApp('src'),
  appSrcComponents: resolveApp('src/components'),
  appSrcUtils: resolveApp('src/utils'),
  appProxySetup: resolveModule(resolveApp, 'src/setProxy'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  moduleFileExtensions,
}
