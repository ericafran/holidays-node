var db = require('../../config/SqliteConfig.js')
module.exports.criarTabelas= () =>{
    
    var createSqlTabelas = `CREATE TABLE IF NOT EXISTS estados(
        id_estado INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_Estado VARCHAR(25),
        sigla CHAR(2) 
        
        );

        CREATE TABLE IF NOT EXISTS municipios(
        id_municipio INTEGER PRIMARY KEY ,
        nome_Municipio varchar(25),
        chave_estado integer,
        CONSTRAINT fk_MuniEst FOREIGN KEY (chave_estado)REFERENCES estados (id_estado)
       );

        CREATE TABLE IF NOT EXISTS feriados(
         id_feriados INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
         nome_feriado  varchar(25),
         data_feriado TEXT NOT NULL ,
         chave_municipio integer,
         CONSTRAINT fk_FeriMuni FOREIGN KEY (chave_municipio)REFERENCES municipios (id_municipio)
         );`


         db.openDb().then(db=>{
            db.exec(createSqlTabelas);
            console.log('TABELA OK')
        })

        }
    