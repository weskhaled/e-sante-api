var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// height
var HeightSchema = new Schema({
    height: {
        type: String,
    },
    user: {
        type: String,
    }
});


var HeightHistorySchema = new Schema({
    height_id: {
        type: String,
    },
    height: {
        type: String,
    }
});

module.exports = mongoose.model('Heighs', HeightSchema);
module.exports = mongoose.model('HeightHistories', HeightHistorySchema);
