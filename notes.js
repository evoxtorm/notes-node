console.log("Starting notes.js");


let addNote = (title, body) => {
  // console.log('Adding note', title, body);
  let notes = [];
  let note = {
    title,
    body
  };
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
