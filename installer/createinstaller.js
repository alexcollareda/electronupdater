const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath)

  return Promise.resolve({
    appDirectory: path.join(outPath, 'client-edi-app-win32-ia32/'),
    authors: 'TIVIT',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'client-edi-app.exe',
    setupExe: 'ElectronTutorialAppInstaller.exe'
  })
}
