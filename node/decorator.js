function decorator(sourceObj, decortorFn){
  decortorFn(sourceObj)
  return sourceObj
}

module.exports = decorator