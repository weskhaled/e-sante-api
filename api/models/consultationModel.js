var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// consultation
var ConsultationSchema = new Schema({
    consultation: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Consultations', ConsultationSchema);
