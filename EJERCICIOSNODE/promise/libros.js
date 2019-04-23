const express = require ("express");
let router = express.Router();


const fs = require('fs');
const archivo = 'libros.json';
/*let cargarLibros = () => {
try {
return JSON.parse(fs.readFileSync(archivo, 'utf8'));
} catch (e) {
return [];
}
};
La convertimos en asincrona con promise*/

let cargarLibros = () => {
    return new Promise((resolve, reject) => {
            try {
                //console.log("ENTRA");
                resolve(JSON.parse(fs.readFileSync(archivo, "utf8")));
            } catch(e){
                //console.log(e);
                reject([]);
            }
    })
}





let guardarLibros = (libros) => {
fs.writeFileSync(archivo, JSON.stringify(libros));
};

// II
/* let buscarLibroPorId = (id) => {
    let libros = cargarLibros();
    let resultado = libros.filter((libro) => libro.id == id);
    if (resultado.length > 0)
    return resultado[0];
    };
 pasamos buscarlibroporid a promise*/
 
 let buscarLibroPorId = (id) => {
    return new Promise((resolve, reject) => {
        cargarLibros().then(libros => {
    let resultado = libros.filter((libro) => libro.id == id);
    if (resultado.length > 0)
    // return resultado[0]
    resolve (resultado[0]);
    else reject("Error: El id no coincide");
        });
    });
}

// III
    let nuevoLibro = (id, titulo, autor, precio) => {
        if (!buscarLibroPorId(id))
        {
        let libros = cargarLibros();
        let nuevo = {
        id: id,
        titulo: titulo,
        autor: autor,
        precio: precio
        };
        libros.push(nuevo);
        guardarLibros(libros);
        return true;
        }
        };

let borrarLibro = (id) => {
        let libros = cargarLibros();
        let librosFiltrados =
        libros.filter((libro) => libro.id != id);
            if (librosFiltrados.length !== libros.length)
                guardarLibros(librosFiltrados);
            return librosFiltrados.length !== libros.length;
            };

router.get("/", (req, res) => {
    cargarLibros().then(resultado => {
        //console.log("entra2")
        res.send(resultado);
    }).catch(error => {
        //console.log("entra3")
        res.send(error);
    });
});

router.get("/:id", (req, res) => {
    buscarLibroPorId(req.params.id).then(resultado => {
        if (resultado)
            res.send({error: false, resultado: resultado});
        else
            res.send({error: true, mensajeError: "Libro no encontrado"});
    }).catch(error => {
        res.send({error: true, mensajeError: "Error buscando libros"+error});
    });

});




module.exports = router;

                