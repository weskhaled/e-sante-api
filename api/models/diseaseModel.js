var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// disease
var DiseaseSchema = new Schema({
    disease: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Diseases', DiseaseSchema);
