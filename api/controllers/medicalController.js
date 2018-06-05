var mongoose = require('mongoose');
var Doctor = mongoose.model('Doctors');

// Doctor
exports.list_all_doctors = function (req, res) {
    Doctor.find({}, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};

exports.create_a_doctor = function (req, res) {
    var new_doctor = new Doctor(req.body);
    new_doctor.save(function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};

exports.show_a_doctor = function (req, res) {
    Blood.findByUser(req.params.doctorId, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};

exports.update_a_doctor = function (req, res) {
    Blood.findOneAndUpdate({
        _id: req.params.doctorId
    }, req.body, {
        new: true
    }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json(doctor);
    });
};

exports.delete_a_doctor = function (req, res) {
    Doctor.remove({
        _id: req.params.doctorId
    }, function (err, doctor) {
        if (err)
            res.send(err);
        res.json({
            message: 'Doctor successfully deleted'
        });
    });
};