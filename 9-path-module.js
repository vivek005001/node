
const pathwa = require('path')


console.log(pathwa.sep)

const filePath = pathwa.join('subfolder','test.txt')
console.log(filePath)

const basewa = pathwa.basename(filePath)
console.log(basewa)

const absolutewa = pathwa.resolve(__dirname,'subfolder','test.txt')
console.log(absolutewa)