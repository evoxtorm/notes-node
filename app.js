console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Adding list!');
} else if (command === 'read') {
  console.log('Read all!');
} else if (command === 'remove') {
  console.log('Removing list!');
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
