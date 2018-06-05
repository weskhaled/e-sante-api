var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// allergy
var AllergySchema = new Schema({
    allergy: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Allergys', AllergySchema);
