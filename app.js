//console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove','Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
let command = argv._[0];
// console.log('Command: ', command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);
// console.log(process.argv);

if (command === 'add') {
  // console.log('Adding new note');
  note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Notes already taken");
  }
} else if (command === 'list') {
  // console.log('Adding list!');
  let allNotes = notes.getALl();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.readNotes(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  // console.log('Removing list!');
  let noteRemoved = notes.removeNotes(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found'  ;
  console.log(message);
} else {
  console.log('Command not recognized');
}

// let filteredArray = _.uniq(['Hitesh',1, 'Hitesh',1,2,3,4]);
// console.log(filteredArray);
//
// // console.log(_.isString(true));
// // console.log(_.isString('Hitesh'));
//
// let user = os.userInfo();
//
// fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);
