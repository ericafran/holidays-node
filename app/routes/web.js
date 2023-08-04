var clienteModel = require('../models/clienteModel')();


    module.exports = function(app){
        app.get('/',function(req,res){
              //console.log(clienteModel.all())
              var listaFeriados=clienteModel.all();
            res.render('aplicativo/home',{clientes:listaFeriados});
            
            });
    }