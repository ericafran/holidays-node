
var feriadoController = require('../controllers/feriadoController');
const clienteModel = require('../models/clienteModel')();

module.exports = function (app) {

  app.get('/', async function (req, res) {

    //var feriado = [];

    res.render('aplicativo/index');
  })

  // app.get('/', function (req, res) {
  //   var feriado = [
  //     {
  //       'nome': 'Feriado',
  //       'data': 23
  //     },
  //     {
  //       'nome': 'Feriado2',
  //       'data': 25
  //     },
  //   ]
  //   res.render('aplicativo/index', { feriado: feriado });
  // });
  app.post('/adicionar', function (req, res) {
    feriadoController.adicionar(req, res);

  });
  app.post('/show', async function (req, result) {
    var feriado = await clienteModel.find(1);
    console.log(feriado);
    result.render('aplicativo/show.ejs', { feriado: feriado });
  





  });




};




