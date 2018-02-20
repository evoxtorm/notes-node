console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _  = require('lodash');
const notes = require('./notes.js');

let filteredArray = _.uniq(['Hitesh',1, 'Hitesh',1,2,3,4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Hitesh'));

let user = os.userInfo();

fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);
