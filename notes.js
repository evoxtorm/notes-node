console.log("Starting notes.js");

const fs = require('fs');

let fetchNotes = () => {

};

let saveNotes = (notes) => {

};


let addNote = (title, body) => {
  // console.log('Adding note', title, body);
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

var duplicateNotes = notes.filter((note) => note.title === title);

if (duplicateNotes.length === 0) {
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
