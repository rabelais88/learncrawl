const client = require('cheerio-httpcli')
const request = require('request')
const urlType = require('url')
const fs = require('fs')
const path = require('path')

const LINK_LEVEL = 3
const TARGET_URL = process.argv[2]
let list = {}

//recursive function to get all elements
const downloadRec = (url,level) => {
  //check maximum recall level
  if(level >= LINK_LEVEL) return
  //if url is already registered & downloaded in the key, ignore it.
  if(list[url]) return
  list[url] = true
  
  //ignore outer site
  let us = TARGET_URL.split('/')
  //remove the last element
  us.pop()
  const base = us.join('/')
  if(url.indexOf(base) < 0 ) return

  client.fetch(url,{},(err,$,res)=>{
    $('a').each((index,el)=>{
      let href = $(el).attr('href')
      if(!href) return
      href = urlType.resolve(url,href)
      console.log(href)
      //remove hash(#) from url
      href = href.replace(/\#.+$/,"")
      downloadRec(href,level + 1)
    })

    if(url.substr(url.length-1,1) == '/'){
      url +='index.html'
    }

    const savepath = url.split('/').slice(2).join('/')
    checkSaveDir(savepath)
    console.log(savepath)
    fs.writeFileSync(savepath,$.html())
  })
}

const checkSaveDir = (fname)=>{
  const dir = path.dirname(fname)
  const dirlist = dir.split('/')
  let p = ''
  dirlist.map((elDir) => {
    p += elDir + '/'
    if(!fs.existsSync(p)){
      fs.mkdirSync(p)
    }
  })
}


//function refactory
downloadRec(TARGET_URL,0)
