
var feriadoController = require('../controllers/feriadoController');

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('aplicativo/index');
  });
  app.post('/adicionar', function (req, res) {
    feriadoController.adicionar(req, res);

  });
  app.post('/show', function (req, res) {
    feriadoController.show(req, res);

  });


};

