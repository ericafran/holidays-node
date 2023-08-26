var db = require('../../config/SqliteConfig.js');
const express = require('express');

module.exports = function () {

    this.find = function (municipio, retorno) {
        var municipio = dados.municipio;
        console.log(municipio)
        return;
        var query1 = `select * from feriados where nome_municipio ='${municipio}'`;
        console.log(query1);

        db.openDb().then(db => {
            db.run(query1, retorno);
        });

    };
    this.save = async function (dados, retorno) {
        var nome = dados.nome_feriado;
        var data = dados.data_feriado;
        var chave = dados.chave_municipio;

        var queryCadastra = `insert into feriados (nome_feriado,data_feriado,chave_municipio) 
        VALUES ('${nome}','${data}',${chave})`;

        const registro = await findName(nome);
        
       console.log(registro.length)
        if (registro.length == 0 ) {
            db.openDb().then(db => {
                db.exec(queryCadastra, retorno)

            });
        } else {
            ("Erro ao procurar nome do feriado")
        }




    };

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