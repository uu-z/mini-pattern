const fs = require('fs')
const {CombineStream} = require('../stream')

fs.createReadStream(process.argv[3])
  .pipe(CombineStream.compressAndEncrypt(process.argv[2]))
  .pipe(fs.createWriteStream(process.argv[3] + ".gz.enc"))
  .on('error', err => {
    console.log(err)
  })

