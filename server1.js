var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

// var upload = multer({ storage: storage }).single('file')
// app.post('/upload',function(req, res) {
//      console.log(req);
//   upload(req, res, function (err) {
//     console.log("hii");
//          if (err instanceof multer.MulterError) {
//              return res.status(500).json(err)
//          } else if (err) {
//              return res.status(500).json(err)
//          }
//     return res.status(200).send(req.file)
//   })
// });
app.listen(9000, function() {
  console.log('App running on port 9000');
});

