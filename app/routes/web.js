
var feriadoController = require('../controllers/feriadoController');
const clienteModel = require('../models/clienteModel')();

module.exports = function (app) {

  app.get('/', async function (req, res) {

    //var feriado = [];

    res.render('aplicativo/index');
  })

  app.post('/adicionar', function (req, res) {
    feriadoController.adicionar(req, res);

  });

  app.post('/show', async function (req, result) {
    feriadoController.show(req, result);


  });
app.post ('/acao',function(req,res,next){
  
})





};




