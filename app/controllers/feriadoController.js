var clienteModel = require('../models/clienteModel')();



module.exports.index = function(req,res){
    clienteModel.all(function(erro,resultado){
        res.render('aplicativo/home',{feriados:resultado});
    });


};

module.exports.adicionar = function(req,res){
   
    var nome = req.body.nome_feriado;
    var data = req.body.data_feriado;
    var chave = req.body.chave_municipio;
    clienteModel.save(nome,data,chave,function(erro,resultado){
        
        if(!erro){
            res.redirect('/');
        }else{
            console.log("Erro ao adicionar ")
            res.redirect('/');
        }
    });
};

module.exports.show = function(req,res){
    clienteModel.find(req.params.id,function(erro,resultado){
        if(resultado[0] && !erro){
            res.render('aplicativo/home',{feriados:resultado[0]});
        }else{
            console.log("Esse feriado não existe");
        }
    })

};


