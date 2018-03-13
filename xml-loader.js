const xml2js = require('xml2js')
const parseString = xml2js.parseString

const xml = 
`<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
<food tag="waffles">
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
   Two of our famous Belgian Waffles with plenty of real maple syrup
   </description>
    <calories>650</calories>
</food>
<food tag="waffles">
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>
    Light Belgian waffles covered with strawberries and whipped cream
    </description>
    <calories>900</calories>
</food>
<food tag="waffles">
    <name>Berry-Berry Belgian Waffles</name>
    <price>$8.95</price>
    <description>
    Belgian waffles covered with assorted fresh berries and whipped cream
    </description>
    <calories>900</calories>
</food>
<food tag="toast">
    <name>French Toast</name>
    <price>$4.50</price>
    <description>
    Thick slices made from our homemade sourdough bread
    </description>
    <calories>600</calories>
</food>
<food tag="breakfast">
    <name>Homestyle Breakfast</name>
    <price>$6.95</price>
    <description>
    Two eggs, bacon or sausage, toast, and our ever-popular hash browns
    </description>
    <calories>950</calories>
</food>
</breakfast_menu>`

parseString(xml, (err,res)=>{
  console.log(JSON.stringify(res))
})

parseString(xml,(err,res)=>{
  //res is provided in JSON form
  res.breakfast_menu.food.map((elFood)=>{
    console.log(`food = ${elFood.$.tag}`)
    console.log(`=> ${elFood.name}`)
  })
})

const Builder = xml2js.Builder

const testJson = {
  family:[
    {
      name:'johnson',
      members:[["abigale"],['smith'],['johannes']]
    },
    {
      name:'brooks',
      members:[['lee'],['jamie']]
    },
    {
      name:'xavier',
      members:[['bardem']]
    }
  ]
}
const json2xml = new Builder().buildObject(testJson)
console.log(json2xml)