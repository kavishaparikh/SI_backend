const { NULL } = require('mysql/lib/protocol/constants/types');

module.exports = (app) => {
  var multer = require('multer')
  const graphs = require("../controllers/graph.controller.js");

  app.post("/addnodedetails",graphs.addNode);

  app.post("/adduserdetails",graphs.addUser);
  //------------------------soilmoisture---------------------------------//
  // POST call route to create records in bulk
  app.post("/soilmoisture", graphs.soilMoisture);

  // GET call to retrieve all the records present in table
  app.get("/soilmoisture/:id/:sd/:ed", graphs.findAllsoilMoisture);
  //------------------------soilmoisture---------------------------------//
 
  //------------------------Soil temperature---------------------------------//
  // POST call route to create records in bulk
  app.post("/soiltemperature", graphs.soilTemperature);

  // GET call to retrieve all the records present in table
  app.get("/soiltemperature/:id/:sd/:ed", graphs.findAllsoilTemperature);
  //------------------------Soil temperature---------------------------------//

  //------------------------Ambient humidity---------------------------------//
  // POST call route to create records in bulk
  app.post("/ambienthumidity", graphs.ambientHumidity);

  // GET call to retrieve all the records present in table
  app.get("/ambienthumidity/:id/:sd/:ed", graphs.findAllambientHumidity);
  //------------------------Ambient humidity---------------------------------//

  //------------------------Ambient temperature---------------------------------//
  // POST call route to create records in bulk
  app.post("/ambienttemperature", graphs.ambientTemperature);

  // GET call to retrieve all the records present in table
  app.get("/ambienttemperature/:id/:sd/:ed", graphs.findAllambientTemperature);
  //------------------------Ambient temperature---------------------------------//

  //------------------------Leaf wetness---------------------------------//
  // POST call route to create records in bulk
  app.post("/leafwetness", graphs.leafWetness);

  // GET call to retrieve all the records present in table
  app.get("/leafwetness/:id/:sd/:ed", graphs.findAllleafWetness);

  //------------------------Leaf wetness---------------------------------//
  app.get("/node_data",graphs.getnodedetails);
  app.get("/node_details/:id",graphs.getnode);
  app.get("/startdate/:id",graphs.getstartdate);
  app.get("/enddate/:id",graphs.getenddate);
};
