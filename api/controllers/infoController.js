var mongoose = require('mongoose');
var Blood = mongoose.model('Bloods');

// Bloods

exports.show_a_blood = function (req, res) {
    Blood.findByUser(req.params.bloodId, function (err, blood) {
        if (err)
            res.send(err);
        res.json(blood);
    });
};

exports.update_a_blood = function (req, res) {
    Blood.findOneAndUpdate({
        _id: req.params.bloodId
    }, req.body, {
        new: true
    }, function (err, blood) {
        if (err)
            res.send(err);
        res.json(blood);
    });
};
