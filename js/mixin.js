class Mixin{
  constructor() {
    this.raw = {
      a: 1,
      b: 2
    }
  }
  mixin(obj){
    Object.assign(this.raw, obj)
  }
}

const test = new Mixin()
test.mixin({c: 3})
console.log(test)