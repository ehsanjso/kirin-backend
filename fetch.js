const fetch = require('node-fetch');
const fs = require('fs');
const csv = require('csv-parser');
const https = require('https');

// let auth = "Bearer 0fa0bd58-d252-4d2d-9b32-69756af75e6a"

// fetch('https://api.tokenterminal.com/v1/projects',
//   { headers: { 'Authorization': auth } })
//   .then(res => res.json())
//   .then(json => {
//     console.log(json)
//   })
// const json = res.json();
// console.log(json);

fetch('https://data-api.defipulse.com/api/v1/defipulse/api/GetHistory?api-key=bc067099ee52c089e17119c3a56b72c8f010ebd4d30037080fb4f0a8d615&period=1m' + '&project=uniswap')
  .then(res => res.json())
  .then(json => {
    let path = 'data/uniswap.json'
    let array = []
    for (each of json){
      let toPush = {}
      toPush['timestamp'] = each['timestamp'] * 1000
      toPush['date'] = new Date(each['timestamp'] * 1000)
      toPush['tvlUSD'] = each['tvlUSD']
      toPush['tvlETH'] = each['tvlETH']
      array.push(toPush)
    }
    fs.writeFileSync(path, JSON.stringify(array, null, 2)); 
  })

// var uniswap = [];
// fs.createReadStream('data/Uniswap.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     uniswap.push(row)
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//     console.log(uniswap)
//   });



// var d = fs.readFileSync('data/Uniswap.csv', {encoding: 'UTF-8'}).pipe(csv())

// console.log(d)

// let options = "https://openapi.debank.com/v1/user/chain_balance?id=0x0B83d0C0976b71724054E9F74A471F7d1c7AbDc4&chain_id=eth"

// https.get(options, function(res) {
//   console.log(`STATUS: ${res.statusCode}`);
//   res.setEncoding('utf8');
//   res.on('data', function(chunk) {
//     console.log(chunk)
//   })
// })

fetch(options+"id="+address+"&chain_id=eth")