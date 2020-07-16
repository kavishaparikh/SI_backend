const sql = require("./db.js");


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Defining a constructor for handling single records
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const Graph = function(graph) {
  this.value1 = graph.value1;
  this.time_stamp = graph.timestamp1;
  
};


/*
SQL table structure
===========================================
Field	                Type
==========================================
id	                 int(11)      *PRIMARY KEY
level_col	           varchar(255)
cvss	               varchar(255)
title	               varchar(255)
vulnerability	       varchar(255)
solution             varchar(255)
reference_col	       varchar(255)
*/


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Bulk Creation of records from csv //soilmoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Graph.soilMoisture = (req_arr,result) =>{
  sql.query("INSERT INTO soil_moisture(value1,time_stamp,node_id) VALUES ?", [req_arr], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    
    result(null, {records:req_arr.length, status:'Sucess'});
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Fetch all the the records // soilmoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Graph.findAllsoilMoisture = result => {
  sql.query("SELECT * FROM soil_moisture limit 30", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Bulk Creation of records from csv //soi temperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Graph.soilTemperature = (req_arr,result) =>{
  sql.query("INSERT INTO soil_temperature(value1,time_stamp,node_id) VALUES ?", [req_arr], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    
    result(null, {records:req_arr.length, status:'Sucess'});
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Fetch all the the records //soil temperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Graph.findAllsoilTemperature = result => {
  sql.query("SELECT * FROM soil_temperature limit 30", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Bulk Creation of records from csv //Ambient humidity
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Graph.ambientHumidity = (req_arr,result) =>{
  sql.query("INSERT INTO ambient_humidity(value1,time_stamp,node_id) VALUES ?", [req_arr], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    
    result(null, {records:req_arr.length, status:'Sucess'});
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Fetch all the the records //Ambient humidity
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Graph.findAllambientHumidity = result => {
  sql.query("SELECT * FROM ambient_humidity limit 30", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Bulk Creation of records from csv //Ambient temperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Graph.ambientTemperature = (req_arr,result) =>{
  sql.query("INSERT INTO ambient_temperature(value1,time_stamp,node_id) VALUES ?", [req_arr], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    
    result(null, {records:req_arr.length, status:'Sucess'});
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Fetch all the the records //Ambient temperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Graph.findAllambientTemperature = result => {
  sql.query("SELECT * FROM ambient_temperature limit 30", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Bulk Creation of records from csv //Leaf wetness
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Graph.leafWetness = (req_arr,result) =>{
  sql.query("INSERT INTO leaf_wetness(value1,time_stamp,node_id) VALUES ?", [req_arr], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    
    result(null, {records:req_arr.length, status:'Sucess'});
  });
};




//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Fetch all the the records //Leaf wetness
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Graph.findAllleafWetness = result => {
  sql.query("SELECT * FROM leaf_wetness limit 30", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

module.exports = Graph;
