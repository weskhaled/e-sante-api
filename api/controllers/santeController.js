var mongoose = require('mongoose');
var Allergy = mongoose.model('Allergys');

// Allergy
exports.list_all_allergies = function (req, res) {
    Allergy.find({}, function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.create_a_allergy = function (req, res) {
    var new_allergy = new Allergy(req.body);
    new_allergy.save(function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.show_a_allergy = function (req, res) {
    Blood.findByUser(req.params.allergyId, function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.update_a_allergy = function (req, res) {
    Blood.findOneAndUpdate({
        _id: req.params.allergyId
    }, req.body, {
        new: true
    }, function (err, allergy) {
        if (err)
            res.send(err);
        res.json(allergy);
    });
};

exports.delete_a_allergy = function (req, res) {
    Allergy.remove({
        _id: req.params.allergyId
    }, function (err, allergy) {
        if (err)
            res.send(err);
        res.json({
            message: 'Allergy successfully deleted'
        });
    });
};
