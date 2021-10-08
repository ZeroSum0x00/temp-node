console.log('first task')
console.time()

setTimeout(() => {
    console.log('second task')
}, 3600)

console.timeEnd()

console.log('done!')