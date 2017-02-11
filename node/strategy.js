const fs = require('fs')
const ini = require('ini')
const objectPath = require('object-path')

class Config {
  constructor(strategy) {
    this.data = {}
    this.strategy = strategy
  }

  get(path) {
    return objectPath.get(this.data, path)
  }
  set(path, value) {
    return objectPath.set(this.data, path, value)
  }
  read(file) {
    console.log(`Deserializing from ${file}`)
    this.data = this.strategy.deserialize(fs.readFileSync(file, 'utf-8'))
  }
  save(file) {
    console.log(`Serializing to ${file}`)
    fs.writeFileSync(file, this.strategy.serialize(this.data))
  }
}

const strategy = {
  ini: {
    deserialize: data => ini.parse(data),
    serialize: data => ini.stringify(data)
  },
  json: {
    deserialize: data => JSON.parse(data),
    serialize: data => JSON.stringify(data)
  }
}

const jsonConfig = new Config(strategy.json)
jsonConfig.read('test/test.json')
jsonConfig.set('foo', 'bar')
jsonConfig.save('test/test.json')

const iniConfig = new Config(strategy.ini)
iniConfig.read('test/test.ini')
iniConfig.set('foo', 'bar')
iniConfig.save('test/test.ini')