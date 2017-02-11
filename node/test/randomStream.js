const { RandomStream } = require('../stream')
const randomStream = new RandomStream()

randomStream.on('readable', () => {
  let chunk = null
  while(chunk = randomStream.read()) {
    console.log(`Chunk received: ${chunk.toString()}`)
  }
})
