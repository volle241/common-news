const precss = require('precss');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');
const postcssInlineBase64 = require('postcss-inline-base64');

module.exports = {
  plugins: [
    precss,
    postcssNested,
    postcssSimpleVars,
    autoprefixer,
    postcssInlineBase64,
  ]
};
