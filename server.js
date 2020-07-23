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
  // if(req.file===NULL)
  // {
  //     return res.status(400).json({messege:'No file choosen'});
  // }
  console.log(req);
  const nametype=req.body.name+'.csv';
  const file=req.files.file;
  file.mv(`${__dirname}/app/controllers/${nametype}`,err=>{
    if(err)
    {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({filename:file.name});
    graphs.soilMoisture(nametype);
  });
});
// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

