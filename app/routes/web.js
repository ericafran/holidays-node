
var feriadoController = require('../controllers/feriadoController');

module.exports = function (app) {
  
  app.get('/', function (req, res) {
    res.render('aplicativo/index');
  });

  // app.get('/',function(req,res){
  // feriadoController.index(req,res);
  // });

  app.post('/', function (req, res) {
    feriadoController.adicionar(req, res);

  });

  app.get('/', function (req, res) {

    feriadoController.show(req, res);

  });


};

