const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fileupload =require('express-fileupload');

const app = express();
const graphs = require("./app/controllers/graph.controller.js");
// parse requests of content-type - application/json
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(fileupload())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./app/routes/graph.routes.js")(app);

app.post('/upload',(req,res)=>{
  var filename1=JSON.stringify( req.files.file.name)
  var arr = filename1.split('.')
  var ft = arr[1].split('"')
  console.log(ft);
  if(ft[0]!="csv")
  {
      return res.status(500).json({messege:'Invalid file choosen'});
  }
  
  const nametype=req.body.name+'.csv';
  const file=req.files.file;
  file.mv(`${__dirname}/app/controllers/${nametype}`,err=>{
    if(err)
    {
      console.error(err);
      return res.status(500).send(err);
    }
    var a;
    graphs.soilMoisture(nametype,(r)=>{
      console.log(r)
      a=r;
      
    })
    function myFunc(arg) {
    if(a=="error")
      {
        return res.status(500).json({messege:'Invalid file choosen'});
      }
    return res.json({filename:file.name});
    }
    setTimeout(myFunc, 1000, 'funky');
  });
});
// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

