const fs = require('fs');
const os = require('os');

function homeDir() {
  const home = os.homedir();
  const directoryMembers = fs.readdirSync(home);
  return directoryMembers;
}

export {
  homeDir,
};
