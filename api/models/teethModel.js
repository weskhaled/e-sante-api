var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// teeth
var TeethSchema = new Schema({
    teeth: {
        type: String,
    },
    user: {
        type: String,
    },
    description: {
        type: String,
    },
    act: {
        type: String,
    },
    dentiste: {
        type: Boolean,
    },
    start_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Teeths', TeethSchema);
