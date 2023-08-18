
var feriadoController = require ('../controllers/feriadoController');

    module.exports = function(app){
        app.get('/',function(req,res){
        res.render('aplicativo/home');
          });

         // app.get('/',function(req,res){
           // feriadoController.index(req,res);
         // });
          
        app.post('/',function(req,res){
        feriadoController.adicionar(req,res);
          
        });
        
              
           
            
        };

