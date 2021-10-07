const path = require('path')

console.log(path.sep)

var file_path = path.join(__dirname, 'content', 'subfolder', 'text.txt')
console.log(file_path)

const base = path.basename(file_path)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)