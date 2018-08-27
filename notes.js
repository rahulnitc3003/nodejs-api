console.log("notes.js is working");

const fs = require('fs');

var fetchNote = () => {
    /* --- if File is already exists --- */
    try{
        var noteString = fs.readFileSync('note-data.json');
        return JSON.parse(noteString);
    }
    catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json',JSON.stringify(notes));
};
/* --- Add command operation --- */
let addNote = (title, body) => {
    var notes = fetchNote();
    var note = {
        title,
        body,
    };

    /* --- if note.title is alredy existed --- */
    var duplicateNode = notes.filter( (note) => note.title === title);
    if(duplicateNode.length === 0){
        notes.push(note);
        saveNotes(notes);
        console.log("Note is sucessfully Added");
    }
    else{
        console.log("Note is Already Existed");
    }
};

/* --- List command operation --- */
let getList = () => {
    return fetchNote();
};

/* --- Read command operation --- */
let getNote = (title) => {
    let getNotes = fetchNote();
    let retriveNote = getNotes.filter( (note) => note.title === title );
    if(retriveNote.length === 0)
    {
        console.log("Note Not Found");
    }
    else{
    	console.log("------------------");
        console.log("   Note Details");
        console.log("------------------");
        console.log("Title: ",retriveNote[0].title);
        console.log("Body: ",retriveNote[0].body);
    }
};

/* --- Remove command operations --- */
let removeNote = (title) => {
    let noteRemove = fetchNote();
    let filterNotes = noteRemove.filter( (note) => note.title != title );
    saveNotes(filterNotes);
    return noteRemove.length !== filterNotes.length;
};

module.exports = {
    addNote: addNote,
    getNote : getNote,
    getList : getList,
    removeNote : removeNote
};