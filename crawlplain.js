var url = "http://jpub.tistory.com"
var savepath = 'test.html'

var http = require('http')
var fs = require('fs')

var outfile = fs.createWriteStream(savepath)

http.get(url, (res)=>{
  res.pipe(outfile)
  res.on('end',()=>{
    outfile.close()
    console.log('ok')
  })
})