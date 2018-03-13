const TARGET_URL = "http://jpub.tistory.com"
const casper = require('casper').create()

casper.start(TARGET_URL,function(){
  this.echo(casper.getTitle())
})

casper.run()