const names = require('./3-2-names.js')
console.log(names)

const sayHi = require('./3-3-utils')
console.log(sayHi)

sayHi('sussan')
sayHi(names['john'])
sayHi(names['peter'])

const data = require('./4-alternative-flavor')
console.log(data)

require('./5-mind-grenade')