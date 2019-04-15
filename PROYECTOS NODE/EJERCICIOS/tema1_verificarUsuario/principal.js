const utilidades = require('./utilidades_os');


if(utilidades.esUsuario("pepe")){
     console.log("usuario correcto");
}else{
     console.log("el usuario no es pepe");
}

console.log("el usuario correcto es:' "+ utilidades.loginusuario+"'");


