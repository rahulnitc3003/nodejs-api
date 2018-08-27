//console.log("app.js is working");

const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(_.isString("Rahul"));    //true
// console.log(_.isString(true));   //false


let command = process.argv[2]; // same as let command = yargsArgv._[0];

const titleOptions = {
    describe : "Title of Note",
    demand : true,
    alias : 't'
};
const bodyOptions = {
    describe : 'Body of Note',
    demand : true,
    alias: 'b'
};

let yargsArgv = yargs
    .command('add','Add a Note',{
        title: titleOptions,
        body : bodyOptions
    })
    .command('list', 'List of all Notes')
    .command('read','Find the Note',{
        title: titleOptions
    })
    .command('remove','Remove a Note',{
        title : titleOptions
    })
    .help()
.argv;
console.log("------------------");
console.log("Process Arguments:");
console.log("------------------");
console.log(process.argv);
console.log("------------------");
console.log('Yargs Arguments');
console.log("------------------");
console.log(yargsArgv);

console.log("------------------");
console.log("Arguments passed");
console.log("------------------");
console.log("Title: ",yargsArgv.title); // node app.js add --title="Section1" --body="this is body section"
console.log("Body: ",yargsArgv.body);

console.log("Command:", command);
//console.log("-----------------");

if (command === "add") {
    notes.addNote(yargsArgv.title, yargsArgv.body);
}
else if (command === "list") {
    let allNotes = notes.getList();
    console.log("*********************");
    console.log("    Notes Details    ");
    console.log("*********************");
    allNotes.forEach((notes) => {
        console.log("Title: ",notes.title);
        console.log("Body: ",notes.body);
        console.log("--------------------");
    });
    console.log(`Total ${allNotes.length} Notes Founded`);
}
else if (command === "read") {
    notes.getNote(yargsArgv.title);
}
else if (command === "remove") {
    var noteRemove = notes.removeNote(yargsArgv.title);
    var message = noteRemove ? "Note Sucessfully Removed" : "Note not existed";
    console.log(message);
}
else{
    console.log("Result:     Command not found");
    console.log("--help     Help for command descriptions");
}