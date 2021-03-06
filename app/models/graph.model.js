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

Graph.addNode = (req,result) =>{
  sql.query("INSERT INTO node_details VALUES (?,?,?,?,?,?,?,?,1)", [req.node_id,req.soil_type,req.crop_type,req.soil_density,req.feeding_date,req.longitude,req.latitude,req.email_id], (err, res) => {
    // sql.query("INSERT INTO node_details(node_id,soil_type,crop_type,soil_density,feeding_date,longitude,latitude,email_id) VALUES ?", req, (err, res) => {  
  if (err) {
    console.log(req)
      console.log("error: ", err);

      result(err, null);
      return;
    }
    
    
    result(null, {records:req.length, status:'Sucess'});
  });
};

Graph.addUser = (req,result) =>{
  sql.query("INSERT INTO user_details VALUES (?,?,?,?,'Customer',1)", [req.email_id,req.name,req.phone_no,req.pass], (err, res) => {
  if (err) {
      console.log("error: ", err);

      result(err, null);
      return;
    }
    
    console.log("hsvggg")
    result(null, {records:req.length, status:'Sucess'});
  });
};


//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Fetch all the the records // soilmoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Graph.findAllsoilMoisture =(req,sd,ed, result) => {
  sql.query("SELECT * FROM soil_moisture where node_id=? and time_stamp between ? and ? ",[req,sd,ed] ,(err, res) => {
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


Graph.findAllsoilTemperature = (req,sd,ed,result )=> {
  sql.query("SELECT * FROM soil_temperature where node_id=? and time_stamp between ? and ? ",[req,sd,ed], (err, res) => {
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


Graph.findAllambientHumidity = (req,sd,ed,result) => {
  sql.query("SELECT * FROM ambient_humidity where node_id=? and time_stamp between ? and ? ",[req,sd,ed], (err, res) => {
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
Graph.findAllambientTemperature = (req,sd,ed,result) => {
  sql.query("SELECT * FROM ambient_temperature where node_id=? and time_stamp between ? and ? ",[req,sd,ed], (err, res) => {
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


Graph.findAllleafWetness = (req,sd,ed,result) => {
  sql.query("SELECT * FROM leaf_wetness where node_id=? and time_stamp between ? and ? ",[req,sd,ed], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Graph.getuserlist = result => {
  sql.query("SELECT DISTINCT * FROM user_details WHERE role = 'Customer' and is_active = 1 ", (err, res) => {
    
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }
    result(null, res);
    
  });
};

Graph.getalluser = result => {
  console.log("Backend");
  sql.query("SELECT DISTINCT * FROM user_details", (err, res) => {
    
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }
    result(null, res);
    
  });
};

Graph.getnodelist = result => {
  console.log("hellooooooo");
  sql.query("SELECT DISTINCT * FROM node_details as nd join user_details as ud WHERE nd.email_id = ud.email_id and nd.is_active = 1 ORDER BY nd.node_id", (err, res) => {
    console.log(res);
    if (err) {
      console.log("error: ", err);

      result(null, err);
      return;
    }
    result(null, res);
    
  });
};


Graph.getnodedetails= result => {
  sql.query("SELECT DISTINCT * FROM node_details", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Graph.getnodedetails1= (req,result) => {
  sql.query("SELECT DISTINCT * FROM node_details where email_id=?", [req], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};
Graph.getnode= (req,result) => {
  sql.query("SELECT node_id,soil_type,crop_type,soil_density,feeding_date,longitude,latitude,user_details.name FROM node_details join user_details on node_details.email_id=user_details.email_id where node_details.node_id=? limit 1",[req], (err, res) => {
    if (err) {
      console.log("error: ", err); 
      result(null, err);
      return; 
    }

   result(null, res);
  });
};

Graph.getstartdate= (req,result) => {
  sql.query("SELECT MIN (time_stamp) AS date FROM soil_moisture where node_id=? ",[req] ,(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Graph.getenddate= (req,result) => {
  sql.query("SELECT MAX (time_stamp) AS date FROM soil_moisture where node_id=? ",[req], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    
    result(null, res);
  });
};

Graph.getnodedelete= (req,result) => {
  // sql.query("delete * from soil_moisture where node_id=?",[req],result());
  // sql.query("delete * from soil_temperature where node_id=?",[req],result());
  // sql.query("delete * from ambient_humidity where node_id=?",[req],result());
  // sql.query("delete * from ambient_temperature where node_id=?",[req],result());
  // sql.query("delete * from leaf_wetness where node_id=?",[req],result());
  sql.query("delete from node_details where node_id=?",[req],(err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    } 

    
    result(null, res);
  })}

  
  Graph.getnodedropdown= (req,result) => {
    sql.query("SELECT node_id FROM node_details where email_id=? ",[req], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      
      result(null, res);
    });
    
  };
  
module.exports = Graph;
