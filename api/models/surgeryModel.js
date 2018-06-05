var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// suggery
var SuggerySchema = new Schema({
    suggery: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Suggerys', SuggerySchema);
