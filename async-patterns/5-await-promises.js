const { readFile, writeFile } = require('fs').promises


const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile(
            './content/result-async-pattern.txt',
            `THIS IS AWESOME1: ${first} ${second}`,
            {flag: 'a'}
            )
    } catch (err){
        console.log(err)
    }
}

start()