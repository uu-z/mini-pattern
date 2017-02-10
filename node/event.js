const {EventEmitter} = require('events')
const path = require("path")
const fs = require('fs')

class Event extends EventEmitter {
  constructor(regex){
    super()
    this.regex = regex
    this.files = []
  }

  add(file) {
    this.files.push(file)
    return this
  }

  find() {
    this.files.forEach( file => {
      fs.readFile(file, 'utf8', (err, content) => {
        if(err) {
          return this.emit('error', err)
        }

        this.emit('fileread', file)

        let match = null
        if (match = content.match(this.regex)) {
          match.forEach(el => this.emit('found', file, el))
        }
      })
    })
    return this
  } 
}

module.exports = Event
