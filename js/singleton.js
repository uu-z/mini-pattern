const singleton = () => {
  let instance
  let createInstance = () => {
    this.a = 1
    this.b = 2
  }
  return {
    getInstance: () => {
      if(!instance){
        instance = createInstance
      }
      return instance
    }
  }
}

const test = singleton()
console.log(test.getInstance() == test.getInstance())