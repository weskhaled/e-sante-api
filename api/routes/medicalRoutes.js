module.exports = function (app) {
    var medical = require('../controllers/medicalController');
    var cors = require('cors');

    // medical medical Routes
    app.use(cors());
    
    app.route('/medical/doctors')
        .get(medical.list_all_doctors)
        .post(medical.create_a_doctor);


    app.route('/medical/doctors/:doctorId')
        .get(medical.show_a_doctor)
        .put(medical.update_a_doctor)
        .delete(medical.delete_a_doctor);

    // medical blood group Routes
};