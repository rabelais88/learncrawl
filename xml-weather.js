const RSS = 'http://www.weather.go.kr/wid/queryDFSRSS.jsp?zone=2824564000'

const parseString = require('xml2js').parseString
const request = require('request')

request(RSS,(err,res,body)=>{
  if(!err && res.statusCode == 200){
    analyzeRSS(body)
  }else{
    console.log(err)
  }
})

//ES6 const has got no hoist
//but function has hoist
//function = loaded regardless of its declared row
//const = loaded after past its declared row
function analyzeRSS(xml) {
  console.log(xml)
  parseString(xml, (err,obj)=>{
    if(err){
      console.log(err)
      return
    }
    console.log(obj.rss.channel[0].title)
    console.log(obj.rss.channel[0].item[0].description[0].body[0].data)
    obj.rss.channel[0].item[0].description[0].body[0].data.map((dat)=>{
      console.log(`${dat.day}일후 ${dat.hour}시 -- ${dat.wfKor}`)
    })
    //console.log(JSON.stringify(obj.rss.channel))
  })
}