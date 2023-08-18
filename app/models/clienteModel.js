var db = require ('../../config/SqliteConfig.js');

module.exports = function(){
    this.all = function(retorno){
        var con = db();
        return con.query('select * from feriados',retorno);
    };

    this.find = function(id,retorno){
        var con = db();
        return con.query('select * from feriados where chave_municipio = ?',id,retorno);
    };
    this.save = function(dados,retorno){
     db.openDb().then(db=>{
        var nome = dados.nome_feriado;
        var data = dados.data_feriado;
        var chave = dados.chave_municipio;
            db.run(`insert into feriados(nome_feriado,data_feriado,chave_municipio) VALUES ('${nome},'${data}','${chave}')`,retorno);
        });
       
    };
    return this;
}