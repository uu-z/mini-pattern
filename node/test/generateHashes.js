const fs = require('fs')
const crypto = require('crypto')

const sha1Stream = crypto.createHash('sha1').setEncoding('base64')
const md5Stream = crypto.createHash('md5').setEncoding('base64')

const inputFile = process.argv[2]
const inputStream = fs.createReadStream(inputFile)

inputStream
  .pipe(sha1Stream)
  .pipe(fs.createWriteStream(inputFile + '.sha1'))

inputStream
  .pipe(md5Stream)
  .pipe(fs.createWriteStream(inputFile + '.md5'))