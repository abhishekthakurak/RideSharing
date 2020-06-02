require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: ['@babel/plugin-transform-runtime']
});
  
// Import the rest of our application.
module.exports = require('../index.js')