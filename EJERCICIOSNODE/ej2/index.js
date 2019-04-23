

const modelo = require('../ej2/modelo'); // esto es lo que llama a la carpeta y archivos de dentro
//let juegos1 = modelo.juegos.listarJuegos(); 

//console.log(juegos1);



modelo.juegos.nuevoJuego(1, "spiderman", "pepe", "friki", 2019);
modelo.juegos.nuevoJuego(2, "lego", "juan", "infantil", 2008);
modelo.juegos.nuevoJuego(3, "aaa", "bbb", "deportes", 2010);
modelo.juegos.nuevoJuego(4, "heavy rain", "quantic", "policiaco", 2011);
modelo.juegos.nuevoJuego(5, "ttt", "mmm", "aventuras", 2010);
modelo.juegos.nuevoJuego(6, "lll", "eee", "deportes", 2008);

console.log("juegos iniciales:");
console.log(modelo.juegos.listarJuegos());

modelo.juegos.borrarJuego(4);
modelo.juegos.borrarJuego(5);

console.log("juegos de deportes:");
console.log(modelo.juegos.listarCategoria("deportes"));

console.log("juegos de infantil:");
console.log(modelo.juegos.listarCategoria("infantil"));

console.log("juegos por año:")
console.log(modelo.juegos.listarAnyoLanzamiento(2010));

console.log("juegos por año:")
console.log(modelo.juegos.listarAnyoLanzamiento(2008));



