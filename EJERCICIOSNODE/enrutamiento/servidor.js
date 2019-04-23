var atenderPeticion = (request, response) => { 
     response.writeHead(200, {"Content-Type": "text/plain"});

     if (request.url == '/') { 
          response.write("Página principal");
     } else if (request.url == '/bienvenida') { 
          response.write("Bienvenido/a");
     } else if (request.url == '/despedida') { 
          response.write("Hasta pronto");
     }
response.end(); }

