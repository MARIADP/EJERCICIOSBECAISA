const express = require('express');
const bodyParser = require("body-parser");
const libros = require("./routes/libros.js");


/* 

app.use use(middleware): Para incorporar middleware al proyecto.
 app.set set(propiedad, valor) / get(propiedad): Establece y
obtiene determinadas propiedades relativas al proyecto.
 app. listen listen(puerto): hace que el servidor se quede escuchando
por un puerto determinado. Opcionalmente, se puede definir
un callback a ejecutar cuando llegue una petición
 app.render render(vista, [opciones], callback): Muestra una
determinada vista estática como respuesta, pudiendo
especificar opciones adicionales y un callback de respuesta
 Etc, los iremos viendo
*/

let app = express();
app.use((req, res, next) => {
    console.log(new Date().toString(), ":", req.method, req.url);
    next();
});

app.use(bodyParser.json());
app.use("/libros", libros);
app.listen(8080);