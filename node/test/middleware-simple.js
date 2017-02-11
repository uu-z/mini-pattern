let middleware = []
middleware.push((ctx, next) => {
  ctx.b = 2
  console.log(ctx)
  next()
  console.log(ctx)
})

middleware.push((ctx, next) => {
 ctx.c = 3
})

function compose(context, next) {
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, () => {
          return dispatch(i + 1)
        }))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }

compose({a: 1})