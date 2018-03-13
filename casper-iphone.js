const TARGET_URL = 'http://jpub.tistory.com'

const casper = require('casper').create();
casper.start();

casper.userAgent('Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)');

casper.viewport(750,1334);

casper.open(TARGET_URL);

casper.then(function(){
  this.capture('screenshot.png');
})

casper.run();