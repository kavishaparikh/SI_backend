module.exports = app => {
  const graphs = require("../controllers/graph.controller.js");

  //------------------------soilmoisture---------------------------------//
   // POST call route to create records in bulk 
   app.post("/soilmoisture", graphs.soilMoisture);

  // GET call to retrieve all the records present in table
  app.get("/soilmoisture", graphs.findAllsoilMoisture);
  //------------------------soilmoisture---------------------------------//

  //------------------------Soil temperature---------------------------------//
   // POST call route to create records in bulk 
   app.post("/soiltemperature", graphs.soilTemperature);

  // GET call to retrieve all the records present in table
  app.get("/soiltemperature", graphs.findAllsoilTemperature);
  //------------------------Soil temperature---------------------------------//
  
  //------------------------Ambient humidity---------------------------------//
   // POST call route to create records in bulk 
   app.post("/ambienthumidity", graphs.ambientHumidity);

  // GET call to retrieve all the records present in table
  app.get("/ambienthumidity", graphs.findAllambientHumidity);
  //------------------------Ambient humidity---------------------------------//
  
  //------------------------Ambient temperature---------------------------------//
   // POST call route to create records in bulk 
   app.post("/ambienttemperature", graphs.ambientTemperature);

  // GET call to retrieve all the records present in table
  app.get("/ambienttemperature", graphs.findAllambientTemperature);
  //------------------------Ambient temperature---------------------------------//
  
  //------------------------Leaf wetness---------------------------------//
   // POST call route to create records in bulk 
   app.post("/leafwetness", graphs.leafWetness);

  // GET call to retrieve all the records present in table
  app.get("/leafwetness", graphs.findAllleafWetness);
  //------------------------Leaf wetness---------------------------------//
  
  
};
