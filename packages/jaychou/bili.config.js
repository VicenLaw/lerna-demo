const {join} = require('path');
const {author, license, name, version} = require('./package.json');
const cwd = __dirname;

module.exports = {
  banner: {
    author: `2020-${new Date().getFullYear()} ${author}\n * Github https://github.com/VicenLaw/lerna-demo`,
    license,
    name,
    version
  },
  output: {
    format: ['es', 'es-min'],
    fileName: 'lerna-demo[min].js'
  },
  input: join(cwd, '/src/index.js')
};
