var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// teeth
var TeethSchema = new Schema({
    teeth: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Teeths', TeethSchema);
