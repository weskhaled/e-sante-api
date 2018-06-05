var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// medicament
var MedicamentSchema = new Schema({
    medicament: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Medicaments', MedicamentSchema);
