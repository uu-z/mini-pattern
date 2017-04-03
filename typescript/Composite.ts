import * as path from 'path'
import * as fs from 'fs'

abstract class FileSystemObject {
  constructor(
    public path: string,
    public parent?: FileSystemObject
  ) { }
  get basename(): string {
    return path.basename(this.path)
  }
}

class FileObject extends FileSystemObject {
  readAll(): Buffer {
    return fs.readFileSync(this.path)
  }
}

class FolderObject extends FileSystemObject {
  items: FileSystemObject[]
  constructor(path: string, parent?: FileSystemObject) {
    super(path, parent)

    this.items = fs
      .readdirSync(this.path)
      .map(path => {
        let stats = fs.statSync(path)
        if (stats.isFile()) {
          return new FileObject(path, this)
        } else if (stats.isDirectory()) {
          return new FolderObject(path, this)
        } else {
          throw new Error('Not supported')
        }
      })
  }
}
