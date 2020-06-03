const Graph = require("../models/graph.model.js");



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //soilMoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.soilMoisture = (req, res) => {
  
  const req_arr = Object.values(req.body).map((v) => Object.values(v));

// Validate request (just incase body is not empty)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Graph.soilMoisture(req_arr, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while sending data.",
      });
    else res.send(data);
  });
};



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Retrieve entire record  //soilMoisture
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAllsoilMoisture = (req, res) => {
  Graph.findAllsoilMoisture((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
  });
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//    Create records in bulk (for csv bulk upload) //soilTemperature
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

exports.soilTemperature = (req, res) => {
  
  const req_arr = Object.values(req.body).map((v) => Object.values(v));

// Validate request (just incase body is not empty)
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
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
exports.findAllsoilTemperature = (req, res) => {
  Graph.findAllsoilTemperature((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
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
  Graph.findAllambientHumidity((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
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
  Graph.findAllambientTemperature((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
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
  Graph.findAllleafWetness((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data.",
      });
    else res.send(data);
  });
};
