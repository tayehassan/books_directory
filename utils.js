const path = require("path");
const fs = require("fs");

const PORT = 8000;

const linkPath = path.join(__dirname, "books.json");

const fileExist = fs.existsSync(linkPath);

module.exports = {
  PORT,
  linkPath,
  fileExist,
};
