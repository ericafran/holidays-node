var http = require ('http');

var server = http.createServer(function(req,res){
    var pagina = req.url;
    console.log(pagina);
    res.end(`
    <!DOCTYPE html>
    <html lang = 'pt-br'>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content= "IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel ="stylesheet"  href="style.css"  />
        
        
        
        <title>Check Holidays</title>
    </head>
    <body>
    <div class="cabecalho">
         <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            CHECK HOLIDAYS
         </nav>
    </div>


       
       
<h1>Verifique aqui os feriados</h1>
    <form>
       <select class="custom-select">
       <option selected>Escolha o Município</option>
       <option value="1">Belo Horizonte</option>
       <option value="2">Betim</option>
       <option value="3">Contagem</option>
       </select>

       <select class="custom-select">
       <option selected>Escolha o ano</option>
       <option value="1">2021</option>
       <option value="2">2022</option>
       <option value="3">2023</option>
       </select>
       <button type="submit" class="btn btn-primary">Consultar Feriados</button>
    <form/>
    <button type="button" class="btn btn-primary">Cadastrar Novo Feriado</button>
    </body>
    </html>
    
    
    
    
    `);

});




console.log("localhost:8000");

server.listen(8000);
