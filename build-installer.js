const electronInstaller = require('electron-winstaller');
const path = require('path');

async function buildInstaller() {
  try {
    console.log('Creating Windows Installer...');
    await electronInstaller.createWindowsInstaller({
      appDirectory: path.join(__dirname, 'dist/WebEaglePhone-win32-x64'),
      outputDirectory: path.join(__dirname, 'dist/installers'),
      authors: 'Eagle Phone',
      description: 'Eagle Phone POS Desktop Application',
      exe: 'WebEaglePhone.exe',
      setupExe: 'WebEaglePhoneSetup.exe',
      noMsi: true,
    });
    console.log('Installer created successfully in dist/installers');
  } catch (e) {
    console.error(`Error creating installer: ${e.message}`);
  }
}

buildInstaller();
