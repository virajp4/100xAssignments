const fs = require("fs");
const util = require("util");

const path = "../easy/sample.txt";
let fileData = "";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(path, "utf8").then((data) => {
  fileData = data;
  fileData = fileData.replace(/\s+/g, " ").trim();
  writeFile(path, fileData, "utf8").then(() => {
    console.log("File overwritten successfully");
    readFile(path, "utf8").then((data) => {
      console.log(data);
    });
  });
});

