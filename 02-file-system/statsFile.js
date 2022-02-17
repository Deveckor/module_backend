const { log } = require('console');
const fs = require('fs');

let o = fs.lstatSync('./nuevaCarpeta').isDirectory();

console.log(o);