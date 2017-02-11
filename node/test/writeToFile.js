const { ToFileStream } = require('../stream')

const tfs = new ToFileStream()

tfs.write({path: "fileA.txt", content: "Hello World"})
tfs.end(() => console.log("All files created"))