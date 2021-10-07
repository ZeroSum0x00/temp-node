const {readFileSync, writeFileSync, write} = require('fs')

console.log('starting')

const first = readFileSync('./content/first.txt', 'utf-8')
console.log(first)

const second = readFileSync('./content/second.txt', 'utf-8')
console.log(second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result:\n\t${first}\n\t${second}`,
    {flag: 'w'}
    )

console.log('done with this task')
console.log('starting the next one')