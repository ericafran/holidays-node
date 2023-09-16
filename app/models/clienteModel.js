var db = require('../../config/SqliteConfig.js');
//const { body, validationResult } = require("express-validator");
const express = require('express');
//const ExpressValidator = require('express-validator');

const ExpressValidator = require('express-validator');
const { render } = require('ejs');


module.exports = function () {

    this.find = async function (municipio) {

        const registro = await findId(municipio);


        if (registro.length > 0) {

            console.log(registro)

            return registro;


        } else {
            (console.log("Erro ao realizar consulta"));
        }

    };


    this.findId = async function (municipio, res) {

        var queryFind = `select nome_feriado, data_feriado from feriados where chave_municipio = '${municipio}'`;

        console.log(queryFind)
        try {
            return db.openDb().then(db => {
                return db.all(queryFind)
                    .then(res => res)
            });

        } catch (e) {
            ('Falha ao procurar')
        }
        return res;


    };


    this.save = async function (dados, retorno) {
        var nome = dados.nome_feriado;
        var chave = dados.chave_municipio;




        const regexNumber = /\d+/g;
        const regexEspecial = /[^a-zA-Z 0-9]+/g;

        var validaNumero = nome.match(regexNumber);
        var validaEspecial = nome.match(regexEspecial);

        const verificaSeNumero = this.validaCampoNumero(validaNumero);
        const verificaSeCaractereEspecial = this.validaCaracteresEspecial(validaEspecial);


        if (verificaSeNumero && verificaSeCaractereEspecial == true) {
            var data = dados.data_feriado;
            var resultadoBuscaData = await this.findData(data, chave);
            console.log(resultadoBuscaData.length);

            if (resultadoBuscaData.length == 0) {

                var queryCadastra = `insert into feriados (nome_feriado,data_feriado,chave_municipio) 
                 VALUES ('${nome}','${data}',${chave})`;

                const registro = await findName(nome, chave);

                console.log(registro.length)
                if (registro.length == 0) {
                    db.openDb().then(db => {
                        db.exec(queryCadastra, retorno)

                    });

                } else {
                    ("Não foi possível cadastrar. Esse feriado, nesta chave já existe ");
                }

            } else {
                (console.log("Já existe um feriado nesta data"))
            }
        } else {
            (console.log("Números ou caracteres inseridos"));
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
            res = false;
            console.log("caracteres identificados")
            return res;
        }

    }



    this.findName = async function (nome, chave_municipio, res) {

        var queryFindName = `select nome_feriado from feriados where nome_feriado = '${nome}' and chave_municipio = '${chave_municipio}'`;
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

    this.findData = async function (data, chave_municipio, res) {
        var queryFindData = `select * from feriados where data_feriado = '${data}' and chave_municipio ='${chave_municipio}'`;
        console.log(queryFindData)
        try {
            return db.openDb().then(db => {
                return db.all(queryFindData)
                    .then(res => res)
            });
        } catch (e) {
            ("Falha ao procurar data");
        }
    };

    return this;
};