module.exports = function (app) {
    var info = require('../controllers/infoController');
    var cors = require('cors');

    // info info Routes
    app.use(cors());

    app.route('/infos/blood/:bloodId')
        .get(info.show_a_blood)
        .put(info.update_a_blood);

};