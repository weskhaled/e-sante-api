var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// vaccination
var VaccinationSchema = new Schema({
    vaccination: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Vaccinations', VaccinationSchema);
