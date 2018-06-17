var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// surgery
var SurgerySchema = new Schema({
    surgery: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Surgerys', SurgerySchema);
