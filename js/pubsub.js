class PubSubHandler{
  constructor() {
    this.eventPool = {}
  }
  off(topicName){
    delete this.eventPool[topicName]
  }
  trigger(topicName,...args){
    this.eventPool[topicName] &&
    this.eventPool[topicName].forEach(callback=>callback(...args))
  }
  on(topicName, callback){
    let topic = this.eventPool[topicName]
    if(!topic){
      this.eventPool[topicName] = []
    }
    this.eventPool[topicName].push(callback)
  }
}

const test = new PubSubHandler()
test.on('a-new-day', (day) => {
  if(day == 6 || day == 7){
    console.log("I'm full of power!!!")
  } else {
    console.log("I was dying")
  }
})

test.trigger('a-new-day', 5)
test.trigger('a-new-day', 6)

test.off('a-new-day')
test.trigger('a-new-day', 7)