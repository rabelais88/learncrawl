const client = require('cheerio-httpcli')
const url = 'http://jpub.tistory.com'
const param = {}
const urlType = require('url')

client.fetch(url,param, (err,$,res)=>{

  if(err){
    console.log('error',err)
    return
  }

  //changed since cheerio-httpcli 0.72 .each((index,el)=>{ $(el).... })
  $('a').each((idx,a)=>{
    let text = $(a).text()
    let href = $(a).attr('href')
    if (!href) return;
    //change relative url address to absolute address
    const href2 = urlType.resolve(url,href)
    console.log(text, href)
    console.log(`=> ${href2}\n`)
  })

  
})