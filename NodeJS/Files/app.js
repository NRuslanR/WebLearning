const fs = require("fs");

const filePath = process.argv[2];

fs.writeFileSync(filePath, "Test File Content");

fs.readFile(filePath, "utf8", function (err, data) {

  console.log("Asynchronous read file:");

  if (err) console.log("readFile error: " + err);

  else console.log(data);

});

console.log("Synchronous read file:");

let fileContent = fs.readFileSync(filePath, "utf8");

console.log(fileContent);

fs.writeFile(filePath, "Other File Content was added", function (err) {

  console.log("Asynchronous write file:");

  if (err) console.log("writeFile error: " + err);

  else console.log("Write has successed");

});

fs.appendFile(filePath, "Appended info", function (error) {

  console.log("Asynchronous appendFile:");

  if (error) console.log("appendFile error: " + error);

  else console.log("Appending has successed");

});

fs.unlink(filePath, err => {

  if (err) console.log("unlink error: " + err);

  else console.log(filePath + " was deleted");

});
