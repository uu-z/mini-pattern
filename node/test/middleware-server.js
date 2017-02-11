const zmq = require('zmq')
const ZmqMiddlewareManager = require('../middleware')

const reply = zmq.socket('rep')
reply.bind('tcp://127.0.0.1:5000')

const zmqm = new ZmqMiddlewareManager(reply)

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
    console.log('Receive', message.data)
    if (message.data.aciton === 'ping') {
      this.send({action: 'pong', echo: message.data.echo})
    }
    next()
  }
})