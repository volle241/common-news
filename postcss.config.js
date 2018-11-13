const precss = require('precss');
const postCssNested = require('postcss-nested');
const postCssSimpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    precss,
    postCssNested,
    postCssSimpleVars,
    autoprefixer,
  ]
};
