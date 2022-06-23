// copy ./package.json into ./dist/{folder}
const fs = require('fs');

const copyFiles = () => {
  // first console flag is folder
  const folder = process.argv[2];
  const src = './package.json';
  const dest = `./dist/${folder}/package.json`;
  fs.copyFileSync(src, dest);
}

export default copyFiles;