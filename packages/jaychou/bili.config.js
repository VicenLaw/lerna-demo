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
    format: ['umd', 'umd-min'],
    moduleName: '@vicenlaw/lerna-demo',
    fileName: 'lerna-demo[min].js',
    extractCSS: false
  },
  input: join(cwd, '/src/index.js')
};
