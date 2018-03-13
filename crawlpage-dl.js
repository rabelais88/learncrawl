const request = require('request')
const fs = require('fs')
const url = 'http://jpub.tistory.com'

//download is possible with pure Node.js but request library is simpler!
request(url).pipe(fs.createWriteStream('test.html'))
console.log('ok!')