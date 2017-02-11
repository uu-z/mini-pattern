const util = require('util')
const ConfigTemplate = require('../template')

class JsonConfig extends ConfigTemplate {

  _deserialize(data) {
    return JSON.parse(data)
  }

  _serialize(data) {
    return JSON.stringify(data, null, '  ')
  }
}

const  jsonConfig = new JsonConfig()
jsonConfig.read('test.json')
jsonConfig.set('foo', 'barz')
jsonConfig.save('test.json')
