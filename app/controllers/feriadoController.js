var clienteModel = require('../models/clienteModel')();



module.exports.adicionar = function (req, res) {

    var dados = req.body;

    clienteModel.save(dados, function (erro, resultado) {

        if (!erro) {

            res.redirect('/adicionar');
        } else {
            console.log("Erro ao adicionar ")
            res.redirect('/');
        }
    });
};

module.exports.show = async function (req, result) {

    var municipio = req.body.teste;


    const chamada = await clienteModel.find(municipio);
    result.redirect('/show');
    return chamada;
    


    //} else {
    //console.log("Erro ao exibir registros")
    //result.redirect('/');
    //}

};




