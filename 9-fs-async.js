const {readFile, writeFile, write} = require('fs')

console.log('starting')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt', 
            `Here is the result:\n\t${first}\n\t${second}`,
            function (err, result) {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }   
        )
    })
})

console.log('starting next task')