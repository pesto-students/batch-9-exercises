const os = require('os');

function homeDir() {
  console.log(os.homedir());
  return os.homedir();
}

export {
  homeDir,
};
