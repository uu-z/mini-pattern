function* iterator(arr) {
  for(let i of arr) {
    yield i
  }
}

module.exports = {
  iterator
}