const fs = require('fs');
var obj = {
    title: "Node.js Tutorial",
    body: "Welcome to Node.js tutorials",
};

console.log(`Type of obj: ${typeof obj}`);

var stringObj = JSON.stringify(obj);
console.log(`Type of stringObj: ${typeof stringObj}`);
console.log(stringObj);

fs.writeFileSync('notes.json',stringObj);

var noteString = fs.readFileSync('notes.json');
var originalObj = JSON.parse(noteString);
console.log("\n");
console.log(`Type of OriginalObject: ${typeof originalObj}`);
console.log(originalObj);
console.log("Title: ",originalObj.title);