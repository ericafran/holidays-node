var sqlite3 = require ('sqlite3') // importação da biblioteca sqlite3
var sqlite = require ('sqlite') // importação  da biblioteca sqlite

module.exports.openDb = function(app){ //modulo que será reutilizado na aplicação
    return sqlite.open({ // abertura da instância do banco de dados ... biblioteca 'sqlite'
        filename: './database.db', // definição do diretorio e nome do arquivo de banco de dados 
        driver: sqlite3.Database // definição do "driver de conexão com banco de dados" ... responsavel por habilitar funcionalidades de operação de insert / update / delete criação de tabelas etc...
    })
}