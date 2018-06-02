module.exports = function (app) {
    var eSante = require('../controllers/eSanteController');
    var cors = require('cors');

    // eSante Routes
    app.use(cors());
    app.route('/users')
        .get(eSante.list_all_users)
        .post(eSante.create_a_user);


    app.route('/users/:userId')
        .get(eSante.show_a_user)
        .put(eSante.update_a_user)
        .delete(eSante.delete_a_user);
};