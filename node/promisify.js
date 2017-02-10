function promisify (fn) {
  return function promisefied() {
    const args = [].slice.call(arguments)
    return new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) {
          return reject(err)
        }
        if (arguments.length <= 2) {
          resolve(result)
        } else {
          resolve([].slice.call(arguments, 1))
        }
      })
      fn.apply(null, args)
    })
  }
}

module.exports = promisify