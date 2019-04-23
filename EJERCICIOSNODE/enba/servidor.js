const http = require('http');
const os = require('os');
const fs =require('fs');

var atenderPeticion = (request, response) => { 
     

     if (request.url == '/usuario') { 
          response.writeHead(200, {"Content-Type": "text/plain"});
          let loginusuario=os.userInfo();
          response.write("HOLA, ");

     } else if (request.url == '/carpeta') { 
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write("Bienvenido/a");

     } else if (request.url == '/') { 
          response.writeHead(200, {"Content-Type": "text/html"});
          response.write("Hasta pronto");
     }
response.end(); }

http.createServer(atenderPeticion).listen(8080); 