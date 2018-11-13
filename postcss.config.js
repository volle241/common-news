const path = require('path');


module.exports = {
  plugins: [
    require('precss'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('autoprefixer'),
  ]
};
