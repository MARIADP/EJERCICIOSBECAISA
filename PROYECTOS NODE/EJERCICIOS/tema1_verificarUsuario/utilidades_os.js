const os = require('os');
let loginusuario=os.userInfo().username;

//se declara la función con un arrow en vez de con una función
let esUsuario=(login) => login === this.loginusuario;





module.exports={
     loginusuario:loginusuario,
     esUsuario:esUsuario
}




