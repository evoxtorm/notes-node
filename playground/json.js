// let obj = {
//   name : 'Hitesh'
// };
//
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
 // let personString = '{"name": "Hitesh","age" : 21}';
 // let person = JSON.parse(personString);
 // console.log(typeof person);
 // console.log(person);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);

// originalNoteString
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
//note

let note = JSON.parse(originalNoteString);

console.log(typeof note);
console.log(note);
console.log(note.title);
