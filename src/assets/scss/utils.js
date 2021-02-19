// utils.js
const path = require("path");
const resources = [
  "common/_resources.scss"
];

module.exports = resources.map(file => path.resolve(__dirname, file));