const http = require('http');

/*var atenderPeticion = (request, response) =>{

response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Bienvenido/a");
response.end();

}*/



var atenderPeticion = (request, response) => {
     response.writeHead(200, {"Content-Type": "text/plain"});
     response.write("Bienvenido/a\n"); response.write("Tienes este navegador: " + request.headers['user-agent']);
     response.end();
     }



http.createServer(atenderPeticion).listen(8080); 

