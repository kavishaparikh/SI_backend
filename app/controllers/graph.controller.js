const Graph = require("../models/graph.model.js");
const csv = require('csv-parse');
const fs = require('fs');
const moment = require('moment')

exports.addNode=(req,res)=>{
    console.log("got datattatatuf  " + req.body)
    Graph.addNode(req.body, (err, data) => {
      res.status(500).json({messege:'Invalid file choosen'});
    console.log("kavvii");
  });
}

exports.addUser=(req,res)=>{
    console.log("got datattat  " + req.body)
    Graph.addUser(req.body, (err, data) => {
      res.status(500).json({messege:'Invalid file choosen'});
    console.log("kavii");
  });
}

exports.deleteNode=(req,res)=>{
  console.log("got delete  " + req.body)
  Graph.addUser(req.body, (err, data) => {
});
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //soilMoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.soilMoisture = (req, res) => {
  console.log("File upload thai gai che chinta nai karo"+req);
  // const req_arr = Object.values(req.body).map((v) => Object.values(v));
  // Validate request (just incase body is not empty) 
  if (!req) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

let i=1,j=0,k=0;
let node_id;
const soil_moisture=[],soil_temperature=[],ambient_humidity=[],ambient_tempreture=[],leaf_wetness=[];
fs.createReadStream(__dirname + '/' + req)
  .pipe(csv())
  .on('error', () => {
    res("error");
  })
  .on('data', (datarow) => {
    if(i==1)
     { 
        var nodename = req.split('.');
        node_id=nodename[0];
    }
    if(i>7)
      {
        let str=datarow[0]; 
        if(str=="")
        {
            j++;
            k=0;
        }
        else if(k>1)
        {
            var dateString =datarow[1];
            var dateTimeParts = dateString.split(' ');
            var timeParts = dateTimeParts[1].split(':'),    
            dateParts = dateTimeParts[0].split('-');
            var d = new Date(parseInt(dateParts[2]), parseInt(dateParts[1], 10) - 1, parseInt( dateParts[0]), parseInt(timeParts[0]),  parseInt(timeParts[1]), 30, 0);
            let arr = [parseFloat(datarow[0]),d,node_id];
            if(j==0)
            {
                soil_moisture.push(arr);
            }
            if(j==1)
            {
                soil_temperature.push(arr);
            } 
            if(j==2)
            {
                ambient_humidity.push(arr);
            } 
            if(j==3)
            {
                ambient_tempreture.push(arr);
            }
            if(j==4)
            {
                leaf_wetness.push(arr);
            }
        }
        else
        {
            k++;
        }
      }
      i++;
  })
  .on('end', () => {
    // console.log(soil_moisture);
    Graph.soilMoisture(soil_moisture, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while uploading file.",
        });
      else
      {
        res("Success");
      } 
    });

    Graph.soilTemperature(soil_temperature, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while uploading file.",
        });
      else
      {
        res("Success");
      } 
    });

    Graph.ambientHumidity(ambient_humidity, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while uploading file.",
        });
      else
      {
        res("Success");[]
      } 
    });

    Graph.ambientTemperature(ambient_tempreture, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while uploading file.",
        });
      else
      {
        res("Success");
      } 
    });


    Graph.leafWetness(leaf_wetness, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while uploading file.",
        });
      else
      {
        res("Success");
      } 
    });
  });

  
};



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //soilMoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.findAllsoilMoisture = (req, res) => {
  
 
  var sd =moment(Date.parse(req.params.sd)).format('YYYY-MM-DD HH:mm:ss');
  var ed =moment(Date.parse(req.params.ed)).format('YYYY-MM-DD HH:mm:ss');
  
  console.log("date "+sd);
  console.log("date "+ed);
  Graph.findAllsoilMoisture(req.params.id,sd,ed,(err, data) => {
    arr=[];
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else
    { 
      data.map((x)=>{
         var times=new Date(x.time_stamp). getTime()
        arr.push([times,x.value1])
      })
      console.log(arr);
      res.send(arr);

    }
      
  });
};
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //soilTemperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.soilTemperature = (req, res) => {
    const req_arr = Object.values(req.body).map((v) => Object.values(v));

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Graph.soilTemperature(req_arr, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while sending data.",
      });
    else res.send(data);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //soilTemperature
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::   :::::::::::::::::::::::

exports.findAllsoilTemperature = (req, res) => {
   
  var sd =moment(Date.parse(req.params.sd)).format('YYYY-MM-DD HH:mm:ss');
  var ed =moment(Date.parse(req.params.ed)).format('YYYY-MM-DD HH:mm:ss');
  console.log("heyyyyy"+req.params.id)
  Graph.findAllsoilTemperature(req.params.id,sd,ed,(err, data) => {
    arr=[];
    if (err)
    
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else{
      data.map((x)=>{
        var times=new Date(x.time_stamp). getTime()
       arr.push([times,x.value1])
     })
     console.log(arr);
     res.send(arr);
    }
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //ambientHumidity
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.ambientHumidity = (req, res) => {
  
  const req_arr = Object.values(req.body).map((v) => Object.values(v));
// Validate request (just incase body is not empty)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Graph.ambientHumidity(req_arr, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while sending data.",
      });
    else res.send(data);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //ambientHumidity
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.findAllambientHumidity= (req, res) => {
  
  var sd =moment(Date.parse(req.params.sd)).format('YYYY-MM-DD HH:mm:ss');
  var ed =moment(Date.parse(req.params.ed)).format('YYYY-MM-DD HH:mm:ss');
  Graph.findAllambientHumidity(req.params.id,sd,ed,(err, data) => {
    arr=[];
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      else{
        data.map((x)=>{
          var times=new Date(x.time_stamp). getTime()
         arr.push([times,x.value1])
       })
       console.log(arr);
       res.send(arr);
      }
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //ambientTemperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.ambientTemperature = (req, res) => {
  
  const req_arr = Object.values(req.body).map((v) => Object.values(v));
  // Validate request (just incase body is not empty)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Graph.ambientTemperature(req_arr, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while sending data.",
      });
    else res.send(data);
  });

};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //ambientTemperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.findAllambientTemperature= (req, res) => {
  
  var sd =moment(Date.parse(req.params.sd)).format('YYYY-MM-DD HH:mm:ss');
  var ed =moment(Date.parse(req.params.ed)).format('YYYY-MM-DD HH:mm:ss');
  Graph.findAllambientTemperature(req.params.id,sd,ed,(err, data) => {
    arr=[];
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      else{
        data.map((x)=>{
          var times=new Date(x.time_stamp). getTime()
         arr.push([times,x.value1])
       })
       console.log(arr);
       res.send(arr);
      }
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //leafWetness
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.leafWetness = (req, res) => {
  const req_arr = Object.values(req.body).map((v) => Object.values(v));
  // Validate request (just incase body is not empty)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Graph.leafWetness(req_arr, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while sending data.",
      });
    else res.send(data);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //leafWetness
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.findAllleafWetness = (req, res) => {
   
  var sd =moment(Date.parse(req.params.sd)).format('YYYY-MM-DD HH:mm:ss');
  var ed =moment(Date.parse(req.params.ed)).format('YYYY-MM-DD HH:mm:ss');
  Graph.findAllleafWetness(req.params.id,sd,ed,(err, data) => {
    arr=[];
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      else{
        data.map((x)=>{
          var times=new Date(x.time_stamp). getTime()
         arr.push([times,x.value1])
       })
       console.log(arr);
       res.send(arr);
      }
  });
};

exports.getnodedetails = (req, res) => {
  if(req.params.role=="admin")
  {
  Graph.getnodedetails((err, data) => {
    
   if (err)

      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
  });}
  else{
    Graph.getnodedetails1(req.params.id,(err, data) => {
    
      if (err)
   
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving data.",
         });
       else res.send(data);
     }); 
  }
};

exports.getnode = (req, res) => {
  console.log("heyyyy "+req.params.id)
  Graph.getnode(req.params.id,(err, data) => {
  if (err)
  res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
  });
};


exports.getstartdate= (req, res) => {
  
  Graph.getstartdate(req.params.id,(err, data) => {
   if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
  });
};

exports.getenddate = (req,res) => {
  
  Graph.getenddate(req.params.id,(err, data) => {
   if (err)
     res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving data.",
    });
   else res.send(data);
});
};
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //user list
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAllusers = (req, res) => {
  Graph.findAllusers((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
  });
};

exports.getuserlist = (req, res) => {
    
  Graph.getuserlist((err, data) => {
   if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      
    else {
      res.send(data);
    }
  });
};

exports.getalluser = (req, res) => {
    
  Graph.getalluser((err, data) => {
   if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      
    else {
      res.send(data);
    }
  });
};

exports.getnodelist = (req, res) => {
  Graph.getnodelist((err, data) => {
  if(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      
  else{
      res.send(data);
    }
  });
};

exports.downloadfile = (req, res) => {
  console.log(req.params.file)
  const file = `${__dirname}/${req.params.file}`;

res.download(file); 
};

exports.getnodedelete = (req, res) => {
  console.log("kavisha "+req.params.id)
  Graph.getnodedelete(req.params.id,(err, data) => {
   if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
      
    else {
      res.send(data);
    }
  });
};

exports.getnodedropdown = (req,res) => {
  
  Graph.getnodedropdown(req.params.id,(err, data) => {
   if (err)
     res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving data.",
    });
   else res.send(data);
});
};
