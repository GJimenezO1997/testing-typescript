// copy ./package.json into ./dist/{folder}
const fs = require('fs');

const getPackageJsonContent = (folder) => `{
  "name": "@gjimenez97/${folder}",
  "description": "",
  "keywords": [""],
  "version": "0.0.1",
  "sideEffects": false,
  "module": "./${folder}.js",
  "main": "./${folder}.js",
  "types": "./${folder}.d.ts",
  "author": "gjimenez97",
  "license": "ISC"
}`

const copyFiles = () => {
  // first console flag is folder
  const folder = process.argv[2].replace('--', '');
  const content = getPackageJsonContent(folder);
  const path = `./dist/${folder}/package.json`
  fs.writeFileSync(path, content);
}

copyFiles();