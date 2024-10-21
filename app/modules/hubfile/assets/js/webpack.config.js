const path = require('path');
const mode_according_to_flask_env = process.env.FLASK_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: path.resolve(__dirname, './scripts.js'),
  output: {
    filename: 'hubfile.bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    fallback: {
      "fs": false
    }
  },
  mode: mode_according_to_flask_env,
};
