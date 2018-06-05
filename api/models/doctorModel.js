var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// doctor
var DoctorSchema = new Schema({
    doctor: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Doctors', DoctorSchema);
