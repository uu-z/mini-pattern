const zmq = require('zmq')
const ZmqMiddlewareManager = require('../middleware')

const request = zmq.socket('req')
request.connect('tcp://127.0.0.1:5000')

const zmqm = new ZmqMiddlewareManager(request)

zmqm.use({
  inbound: (message, next) => {
    message.data = JSON.parse(message.data.toString())
    next()
  },
  outbound: (message, next) => {
    message.data = new Buffer(JSON.stringify(message.data))
    next()
  }
})

zmqm.use({
  inbound: (message, next) => {
    console.log(`Echoed back: ${message.data}`)
    next()
  }
})

setInterval(() => {
  zmqm.send({action: 'ping', echo: Date.now()})
}, 1000)