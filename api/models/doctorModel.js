var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// doctor
var DoctorSchema = new Schema({
    doctor: {
        type: String,
    },
    speciality: {
        type: String,
    },
    user: {
        type: String,
    },
    current: {
        type: Boolean,
    },
    comment: {
        type: String,
    }
});


module.exports = mongoose.model('Doctors', DoctorSchema);
