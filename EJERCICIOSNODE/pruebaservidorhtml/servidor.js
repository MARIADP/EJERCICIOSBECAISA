/*const http = require('http');
const fs = require ('fs');

var atenderPeticion = (request, response) => { 
     response.writeHead(200, {"Content-Type": "text/html"}); 
     var contenido = fs.readFileSync('./index.html', 'utf8'); 

     var navegador = request.headers['user-agent'];
     contenido = contenido.replace('{navegador}', navegador);

     response.write(contenido);
     response.end();
}
*/

const http = require('http')
const fs = require ('fs');

let atenderPeticion = (request, response) => {

     response.writeHead(200, {"Content-Type": "text/plain"});
     let contenido = fs.readFileSync('index.html', 'utf8');

     let navegador = request.headers['user-agent']

    if(navegador.indexOf("Chrome")>= 0){
          contenido = contenido.replace('{saludo}', "utilizas chrome");

     }else{
          contenido = contenido.replace('{saludo}', "utilizas un navegador no reconocido");

     }
     response.write(contenido);
     response.end();
}




http.createServer(atenderPeticion).listen(8080); 