// copy ./package.json into ./dist/{folder}
const fs = require('fs');

const getPackageJsonContent = (folder) => `{
  "sideEffects": false,
  "module": "./${folder}.js",
  "main": "../${folder}.js",
  "types": "./${folder}.d.ts"
}`

const copyFiles = () => {
  // first console flag is folder
  const folder = process.argv[2].replace('--', '');
  const content = getPackageJsonContent(folder);
  const path = `./dist/${folder}/package.json`
  fs.writeFileSync(path, content);
}

copyFiles();