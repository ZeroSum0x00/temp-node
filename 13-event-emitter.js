const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('respone', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('respone', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('respone', 'john', 34)