const http = require('http');
const fs = require('fs');
const os = require('os');

var atenderPeticion = (request, response) => {
   
    
    
   
    if (request.url == '/usuario') {
        response.writeHead(200, {"Content-Type":
        "text/plain"});
        
        response.write("hola, ", os.userInfo().username);
        } else if (request.url == '/carpeta') {
        response.writeHead(200, {"Content-Type":
        "text/plain"});
        fs.readdirSync(".").forEach(fichero => {
            response.write(fichero + "\n");
        });
        } else if (request.url == '/') {
            response.writeHead(200, {"Content-Type":
        "text/html"});
        var contenido = fs.readFileSync('./index.html', 'utf8');
        response.write(contenido);
        } else {
            response.writeHead(200, {"Content-Type":
            "text/html"});
            var contenido = fs.readFileSync('./imagen.html', 'utf8');
            response.write(contenido);
        }
    response.end();
    }

http.createServer(atenderPeticion).listen(8020);