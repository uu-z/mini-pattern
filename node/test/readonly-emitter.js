const EventEmitter = require('events')

class Roee extends EventEmitter {
  constructor(exec) {
    super()
    const emit = this.emit.bind(this)
    this.emit = undefined
    exec(emit)
  }
}

const ticker = new Roee((emit) => {
  let tickCount = 0
  setInterval(() => emit('tick', tickCount++), 1000)
})

ticker.on('tick', (tickCount) => console.log(tickCount, "TICK"))