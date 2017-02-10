const {iterator} = require('../generator')

const handgun = iterator(['usp', 'glock', 'Deagle'])

let currentItem = handgun.next()
while(!currentItem.done) {
  console.log(currentItem.value)
  currentItem = handgun.next()
}

