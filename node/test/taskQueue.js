const TaskQueue = require('../taskQueue')

const Task = new TaskQueue(2)

Task.push( done => {
  console.log('姓名: nano ') 
  done()
})
Task.push( done => {
  console.log('性别: 可爱的男孩子') 
  done()
})
Task.push( done => {
  console.log('年龄: 17') 
  done()
})
Task.push( done => {
  console.log('地址: gensokyo') 
  done()
})
Task.push( done => {
  console.log('以上说的都是假的') 
  done()
})
