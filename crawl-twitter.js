const client = require('cheerio-httpcli')
//const urlType = require('url')
const FB = require('fb')

const crawlData = {
  twitter:{
    url:'http://twitter.com/ParkWebdev',
    tag:'.tweet-text'
  }
}

function postFetch(target){
  return new Promise((resolve,reject)=>{
    const url = crawlData[target].url
    client.fetch(url,{}, (err,$,res)=>{

      if(err){
        console.log('error',err)
        rej(err)
      }

      let collectivePosts = []
      //changed since cheerio-httpcli 0.72 .each((index,el)=>{ $(el).... })
      //parent -> js-tweet-text-container
      $(crawlData[target].tag).each((idx,a)=>{
        console.log($(a).text())
        collectivePosts += $(a).text()
      })

      resolve({sitename:target,posts:collectivePosts})

    })
  })
}

let targetIds = []
FB.setAccessToken('blurred')

function FBpostfetch(){
  return new Promise((resolve,reject)=>{
    FB.api('me/feed','get',{},(feed)=>{
      if(!feed) {
        console.log(err)
        reject(err)
      }
      feed.data.map((elFeed)=>{
        console.log(elFeed)
        targetIds.push(elFeed)
      })
      resolve(targetIds)
    })
  })
}

Promise.all([
  postFetch('twitter'),
  FBpostfetch()
]).then((res)=>{
  //fb target ids

  res[1].map((elFeed)=>{
    FB.api('/' + elFeed.id + '?fields=full_picture',(photoUrl)=>{
      console.log(elFeed.message)
      console.log(photoUrl)
    })
  })
})