console.log("Starting notes.js");

const fs = require('fs');

let fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [] ;
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


let addNote = (title, body) => {
  // console.log('Adding note', title, body);
  let notes = fetchNotes();
  let note = {
    title,
    body
  };



var duplicateNotes = notes.filter((note) => note.title === title);

if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
  }
};

let getALl = () => {
  console.log('Getting all notes');
};

let readNotes = (title) => {
  console.log('Read all the notes', title);
};

let removeNotes = (title) => {
  console.log('Notes are removed', title);
}

module.exports = {
  addNote,
  getALl,
  readNotes,
  removeNotes
};
