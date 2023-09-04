var clienteModel = require('../models/clienteModel')();
const express = require('express');
const ExpressValidator = require('express-validator');


module.exports.adicionar = function (req, res) {
    
    var dados = req.body;
   
    clienteModel.save(dados, function (erro, resultado) {

        if (!erro) {

            res.redirect('/');
        } else {
            console.log("Erro ao adicionar ")
            res.redirect('/');
        }
    });
};

module.exports.show = function (req, res) {

    var municipio = req.query.municipio;

    clienteModel.find(municipio, function (erro, resultado) {

    })

};


