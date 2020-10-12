var express = require('express');
var app = express();
const cypress = require('cypress')
var cors = require('cors')
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");
const imageRoute = '/cypress/screenshots/simple.spec.js/'
var id = 0;
var dataJSON = {}
app.use(cors());

/* GET home page. */
app.get('/compare', function(req, res) {
  cypress.run({
  spec: './cypress/integration/simple.spec.js',
  env:{
    'id': id,
  },
  config :{
    'trashAssetsBeforeRuns': false,
  }
  })
  .then(async (results) => {
    let data = await getDiff();
    let date = new Date(Date.now());
    dataJSON[id] = {'date': date.toString(),'data': data, 'image1': `${imageRoute}pantallazo1-${id}.png`, 'image2': `${imageRoute}pantallazo2-${id}.png`, 'comparisson': `${imageRoute}comparacion-${id}.png` }
    res.send(dataJSON);
    console.log(dataJSON[id]);
    id++;

  })
  .catch((err) => {
    console.error('erroooooor',err)
  })
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", host, port)
})


async function getDiff() {
  const options = {
      output: {
          transparency: 0.3,
          useCrossOrigin: false,
          outputDiff: true
      },
      scaleToSameSize: true,
      ignore: "less"
  };

  // The parameters can be Node Buffers
  // data is the same as usual with an additional getBuffer() function
  
  const data = await compareImages(
      await fs.readFile(`.${imageRoute}pantallazo1-${id}.png`),
      await fs.readFile(`.${imageRoute}pantallazo2-${id}.png`),
      
      //await fs.readFile("./images/logfailed1.png"),
      //await fs.readFile("./images/logfailed2.png"),
      options
  );  
  
  await fs.writeFile(`.${imageRoute}comparacion-${id}.png`, data.getBuffer());
  return data
}
