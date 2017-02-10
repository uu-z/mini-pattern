const Event = require('../Event')

const find = new Event(/hello \w+/)

find
  .add("fileA.txt")
  .add("fileB.json")
  .find()
  .on('found', (file, match) => console.log(`Match "${match} in file ${file}`))
  .on('error', err => console.log(`Error emitted ${err.message}`))
  
