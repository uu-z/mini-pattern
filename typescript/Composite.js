"use strict";
const path = require("path");
const fs = require("fs");
class FileSystemObject {
    constructor(path, parent) {
        this.path = path;
        this.parent = parent;
    }
    get basename() {
        return path.basename(this.path);
    }
}
class FileObject extends FileSystemObject {
    readAll() {
        return fs.readFileSync(this.path);
    }
}
class FolderObject extends FileSystemObject {
    constructor(path, parent) {
        super(path, parent);
        this.items = fs
            .readdirSync(this.path)
            .map(path => {
            let stats = fs.statSync(path);
            if (stats.isFile()) {
                return new FileObject(path, this);
            }
            else if (stats.isDirectory()) {
                return new FolderObject(path, this);
            }
            else {
                throw new Error('Not supported');
            }
        });
    }
}
//# sourceMappingURL=Composite.js.map