var db = require('../../config/SqliteConfig.js');
//const { body, validationResult } = require("express-validator");
const express = require('express');
//const ExpressValidator = require('express-validator');

const ExpressValidator = require('express-validator');

module.exports = function () {

    this.find = async function (municipio, retorno) {
        var municipio = dados.municipio;

        const registro = await findId(municipio);
        var querySeleciona = `select * from feriados where id_municipio = '${registro}`;

        if (registro.length > 0) {
            db.openDb().then(db => {
                db.exec(querySeleciona, retorno)
            });

        } else {
            ("Erro ao realizar consulta")
        }

    };


    this.findId = async function (municipio, res) {

        var queryFind = `select id_municipio from municipios where nome_municipio = '${municipio}`;

        console.log(queryFind)
        try {
            return db.openDb().then(db => {
                return db.all(queryFind)
                    .then(res => res)
            });

        } catch (e) {
            ('Falha ao procurar Id')
        }
        return res;


    };


    this.save = async function (dados, retorno) {
        var nome = dados.nome_feriado;
        const regexNumber = /\d+/g;
        const regexEspecial = /[^a-zA-Z 0-9]+/g;

        var validaNumero = nome.match(regexNumber);
        var validaEspecial = nome.match(regexEspecial);

        const verificaSeNumero = this.validaCampoNumero(validaNumero);
        const verificaSeCaractereEspecial = this.validaCaracteresEspecial(validaEspecial);


        if (verificaSeNumero && verificaSeCaractereEspecial == true) {
            var data = dados.data_feriado;
            var chave = dados.chave_municipio;


            var queryCadastra = `insert into feriados (nome_feriado,data_feriado,chave_municipio) 
                 VALUES ('${nome}','${data}',${chave})`;

            const registro = await findName(nome);

            console.log(registro.length)
            if (registro.length == 0) {
                db.openDb().then(db => {
                    db.exec(queryCadastra, retorno)

                });
            } else {
                ("Não posso cadastrar")

            }

        } else {
            (console.log("Não foi possível cadastrar"))
        }


    }

    this.validaCampoNumero = function (validaNumero, res) {
        if (validaNumero == null || validaNumero[0] == '') {
            res = true;
            return res;
        } else {
            res = false;
            console.log("número detectado");

            return res;
        }

    }

    this.validaCaracteresEspecial = function (validaEspecial, res) {
        if (validaEspecial == null || validaEspecial[0] == '') {
            res = true
            return res;
        } else {
            res=false;
            console.log("caracteres identificados")
            return res;
        }

    }



    this.findName = async function (nome, res) {

        var queryFindName = `select * from feriados where nome_feriado = '${nome}'`;
        console.log(queryFindName)
        try {
            return db.openDb().then(db => {
                return db.all(queryFindName)
                    .then(res => res)
            });


        } catch (e) {
            ('Falha ao procurar nome_feriado');
        }
    };

    return this;
};