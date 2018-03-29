const path = require('path');

module.exports = {
  entry: './lib/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '')
  }
};
