const fs = require('fs'); 
const Emitter = require ('events')
let gestor_eventos = new Emitter();

const archivo = 'juegos.json';

let cargarJuegos = (fichero) => {
          try {return JSON.parse(fs.readFileSync(archivo, 'utf8'));
     } catch (e) {return []; }
}

let guardarJuegos = (juegos) => {
fs.writeFileSync(archivo, JSON.stringify(juegos)); };


let buscarJuegoPorId = (id) => {
     let juegos = cargarJuegos();
     let resultado = juegos.filter((juego) => juego.id == id); if (resultado.length > 0)
     return resultado[0];
     };




let nuevoJuego = (id, titulo, fabricante, categoria, anyolanzamiento) => { if (!buscarJuegoPorId(id)){

     let juegos = cargarJuegos(); 
     let nuevo = {
          id: id,
          titulo: titulo, 
          fabricante: fabricante, 
          categoria: categoria,
          anyolanzamiento: anyolanzamiento
     };
     juegos.push(nuevo); 
     guardarJuegos(juegos); 
     return true;
}};



let borrarJuego = (id) => {
     let juegos = cargarJuegos();
     let juegosFiltrados = juegos.filter((juego) => juego.id != id);
     if (juegosFiltrados.length !== juegos.length){
          guardarJuegos(juegosFiltrados);
     }
     return juegosFiltrados.length !== juegos.length;
   }

let listarVideojuegosDesdeAnyo = (anyolanzamiento)=>{
        let juegos = cargarJuegos('juegos.JSON');
        return juegos.filter((juegos)=>juegos.anyolanzamiento>=anyolanzamiento)
   }

let listarVideojuegosPorCategoria = (categoria)=>{
     let juegos = cargarJuegos('juegos.JSON');
     return juegos.filter((juegos)=>juegos.categoria===categoria)
}


module.exports = {
     listarJuegos: cargarJuegos, 
     nuevoJuego: nuevoJuego, 
     borrarJuego: borrarJuego,
     listarCategoria: listarVideojuegosPorCategoria,
     listarAnyoLanzamiento:listarVideojuegosDesdeAnyo
};