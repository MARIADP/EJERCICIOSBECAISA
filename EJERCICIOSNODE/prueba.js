const fs = require('fs');

const archivo = "datos.txt";
const textoPredefinido = "En un lugar de la mancha\n" + "de cuyo nombre no quiero acordarme";

let guardarDatos = () => { fs.writeFileSync(archivo, JSON.stringify); };
let leerDatos = () => {return fs.readFileSync(archivo, 'utf-8'); };
guardarDatos(); 

console.log("Texto del fichero:"); 
console.log(leerDatos());


fs.writeFileSync(archivo,JSON.stringify(personas));
let personas2 = JSON.parse(fs.readFileSync(archivo, 'utf8'));
     
console.log(personas2);
