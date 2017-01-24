class StateTracker{
  constructor(){
    this.observers = []
    this.internalState = 10
  }

  change(val){
    this.internalState=val
    this.observers.forEach(observer => observer(val))
  }
  registerObserver(ObserverFn){
    this.observers.push(ObserverFn)
  }
}

const test = new StateTracker()

test.registerObserver((a) => {
  console.log(a + 1)
})
test.registerObserver((a) => {
  console.log( a - 1)
})

test.change(0)