
const { criarTabelas } = require('../app/models/InicializadorTabelas');


module.exports = function() {
    criarTabelas()
    var express = require ('express');

    var app = express();
    app.set('view engine','ejs');
    app.set('views','./app/views');
    
    var rotas = require('../app/routes/web');
    rotas(app);


    app.listen(8000,function(){
        console.log("localhost:8000");
    });
} 