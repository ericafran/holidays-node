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
    this.save = function(nome,data,chave,retorno){
     db.openDb().then(db=>{
            db.run(`insert into feriados(nome_feriado,data_feriado,chave_municipio) VALUES (nome,data,chave)`,retorno);
        });
       
    };
    return this;
}