let datos = [
    {nombre: "Diego", telefono: "966112233", edad: 40},
    {nombre: "Carmen", telefono: "911223344", edad: 35},
    {nombre: "Victor", telefono: "611998877", edad: 15},
    {nombre: "Carolina", telefono: "633663366", edad: 17}
    ];
    let promesaMayoresDeEdad = listado => {
        return new Promise((resolve, reject) => {
        let resultado = listado.filter(persona => persona.edad >= 18);
        if (resultado.length > 0)
        resolve(resultado);
        else
        reject("No hay resultados");
        });
        };
        promesaMayoresDeEdad(datos).then(resultado => {
        // Si entramos aquí, la promesa se ha procesado bien
        // En "resultado" podemos acceder al resultado obtenido
        console.log("Coincidencias encontradas:");
        console.log(resultado);
        }).catch(error => {
        // Si entramos aquí, ha habido un error al procesar la promesa
        // En "error" lo podemos consultar
        console.log("Error:", error);});
    

    console.log("prueba")
    let nuevaPersona = persona => {
        return new Promise((resolve, reject) => {
        let existe = datos.filter(pers => pers.telefono === persona.telefono);
            if (existe.length == 0) {
                datos.push(persona);
                resolve(persona);
            } else {
                reject("Error: el teléfono ya existe");
            }

        });

    }
    let per= {nombre:"Pilar", telefono:"910011001", edad: 20};

    nuevaPersona(per).then(resultado => {console.log("añadida persona: ", resultado);}).catch(error => {console.log(error);});

    console.log(datos);


    let borrarPersona = telefono => {
        return new Promise((resolve, reject) => {
        let existePersona = datos.filter(persona => persona.telefono === telefono);
            if (existePersona.length > 0) {
                datos = datos.filter(persona => persona.telefono != telefono);
                resolve(existePersona[0]);
            } else {
                reject("Error: El teléfono no coincide");
            }

        });

    }
   borrarPersona("910011001").then(resultado => {console.log("borrada persona: ", resultado);}).catch(error => {console.log(error);});

   console.log(datos);