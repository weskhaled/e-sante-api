var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
// created model loading
var Task = require('./api/models/eSanteModel');
var bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/eSantedb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
var routes = require('./api/routes/eSanteRoutes');
//register the route
routes(app);

app.listen(port);

console.log('eSante RESTful API server started on: ' + port);