var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// analysis
var AnalysisSchema = new Schema({
    analysis: {
        type: String,
    },
    user: {
        type: String,
    }
});


module.exports = mongoose.model('Analysis', AnalysisSchema);
