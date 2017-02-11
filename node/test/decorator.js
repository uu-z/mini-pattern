const decorator = require('../decorator')

let d = {a:1}
console.log(d)
d = decorator(d, (d) => {d.b=1})
console.log(d)