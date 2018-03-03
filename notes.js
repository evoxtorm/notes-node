//console.log("Starting notes.js");

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
  return note ;
  }
};

let getALl = () => {
  // console.log('Getting all notes');
  return fetchNotes();
};

let readNotes = (title) => {
  // console.log('Read all the notes', title);
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

let removeNotes = (title) => {
  // console.log('Notes are removed', title);
  //Ftech Notes
  let notes = fetchNotes();
  // filter notes, removing the one with the Title
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}


var logNote = (note) => {
  debugger;
  console.log("--");
  console.log(`Title:  ${note.title}`);
  console.log(`Body:  ${note.body}`);
};


module.exports = {
  addNote,
  getALl,
  readNotes,
  removeNotes,
  logNote
};
