const fs = require('fs')
const path = require('path')
const promisify = require('../promisify')

const request = promisify(require('request'))
const mkdirp = promisify(require('mkdirp'))
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

function download(url, filename) {
  console.log(`Downloading ${url}`)
  let body
  return request(url)
    .then(response => {
      body = response.body
      return mkdirp(path.dirname(filename))
    })
    .then(() => writeFile(filename, body))
    .then(() => {
      console.log(`Download and saved: ${url}`)
      return body
    })
}

download('http://www.bilibili.com', 'bilibili.html')