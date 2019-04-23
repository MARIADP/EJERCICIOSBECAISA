

/*Crea una carpeta llamada "Tema1_SaludoNavegador" en tu carpeta de ejercicios. Dentro, crea un servidor web que atienda peticiones y, para cada una, obtenga la cabecera "user-agent" que muestra los datos del navegador, y detecte si está usando Google Chrome o no. En caso afirmativo, deberá mostrar el mensaje "Utilizas Google Chrome", y en caso negativo mostrará "Utilizas un navegador no reconocido".*/

const http = require('http');

var atenderPeticion = (request, response) => {

     response.writeHead(200, {"Content-Type": "text/plain"});

     let navegador = request.headers['user-agent']

     if(navegador.indexOf("Chrome")>= 0){
          response.includes("Utilizas Google Chrome");

     }else{
          response.write("Utilizas un navegador no reconocido" + navegador);

     }

     response.end();}


    /* response.write("Bienvenido/a\n"); response.write("Tienes este navegador: " + request.headers['user-agent'] + "\n");

     let respuesta = request.headers['user-agent']

     if(respuesta = "chrome"){
         
     }else{
          response.write("Utilizas un navegador no reconocido");

     }

     response.end();*/

   
http.createServer(atenderPeticion).listen(8080); 
