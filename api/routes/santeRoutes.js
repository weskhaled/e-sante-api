module.exports = function (app) {
    var sante = require('../controllers/santeController');
    var cors = require('cors');

    // sante Routes
    app.use(cors());
    
    app.route('/sante/allergies')
        .get(sante.list_all_allergies)
        .post(sante.create_a_allergy);


    app.route('/sante/allergies/:allergyId')
        .get(sante.show_a_allergy)
        .put(sante.update_a_allergy)
        .delete(sante.delete_a_allergy);
};