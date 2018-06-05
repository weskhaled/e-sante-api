var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

// Information sur la personne
require('./api/models/userModel');

// Informations générales
require('./api/models/bloodModel');
require('./api/models/heightModel');
require('./api/models/weightModel');

// Etat de santé
require('./api/models/allergyModel');
require('./api/models/diseaseModel');
require('./api/models/medicamentModel');
require('./api/models/surgeryModel');
require('./api/models/vaccinationModel');
require('./api/models/teethModel');

// Consultations médicales
require('./api/models/doctorModel');
require('./api/models/consultationModel');
require('./api/models/analysisModel');
require('./api/models/radiologyModel');

var bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/eSantedb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importing route
var userRoutes = require('./api/routes/userRoutes');
var infoRoutes = require('./api/routes/infoRoutes');
var santeRoutes = require('./api/routes/santeRoutes');
var medicalRoutes = require('./api/routes/medicalRoutes');

//register the route
userRoutes(app);
infoRoutes(app);
santeRoutes(app);
medicalRoutes(app);

app.listen(port);

console.log('eSante RESTful API server started on: ' + port);