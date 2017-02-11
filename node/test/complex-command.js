const request = require('request')

const statusUpdateService = {
  statusUpdates: {},
  sendUpdate: (status) => {
    console.log(`Status sent: ${status}`)
    let id = Math.floor(Math.random() * 10000000)
    statusUpdateService.statusUpdates[id] = status
    return id
  },
  destroyUpdata: id => {
    console.log(`Status removed: ${id}`)
    delete statusUpdateService.statusUpdates[id]
  }
}

function createSendStatusCmd(service, status) {
  let postId = null
  
  const command = () => {
    postId = service.sendUpdate(status)
  }

  command.undo = () => {
    if(postId) {
      service.destroyUpdata(postId)
      postId = null
    }
  }

  command.serialize = () => {
    return {type: 'status', actions: 'post', status}
  }

  return command
}

class Invoker {
  constructor(){
    this.history = []
  }

  run(cmd) {
    this.history.push(cmd)
    cmd()
    console.log('Command executed', cmd.serialize())
  }

  delay(cmd, delay) {
    setTimeout(() => {
      this.run(cmd)
    }, delay)
  }

  undo() {
    const cmd = this.history.pop()
    cmd.undo()
    console.log('Command undo', cmd.serialize())
  }

  runRemotely(cmd) {
    request.post('http://localhost:3000/cmd'), {json: cmd.serialize()}, (err) => {
      console.log(`Command executed remotely ${cmd.serialize()}`)
    }
  }
}

const invoker = new Invoker()
const command = createSendStatusCmd(statusUpdateService, 'HI!')

invoker.run(command)
invoker.undo()
invoker.delay(command, 1000 * 60 * 60)
invoker.runRemotely(command)