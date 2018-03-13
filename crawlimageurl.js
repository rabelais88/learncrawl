const client = require('cheerio-httpcli')
const urlType = require('url')

//change utf8 encoding to appropriate url encoding
const url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지')
const param = {}

client.fetch(url,param,(err,$,res)=>{
  if (err) {
    console.log('err',err)
    return
  }

  $('img').each((index,el)=>{
    let src = $(el).attr('src')
    src = urlType.resolve(url,src)
    console.log(src)
  })
})