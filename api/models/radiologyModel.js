var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// radiology
var RadiologySchema = new Schema({
    radiology: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Radiologys', RadiologySchema);
