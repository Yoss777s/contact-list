//Lista de contactos 
const listaContactos = [
    {
        id: 1,
        nombre: "Valeria",
        apellido: "Moretti",
        telefono: "124-578", 
        ubicacion: { ciudad: "Buenos Aires", direcion: "calle 7 Belgrano" },
    },
    {
        id: 2,
        nombre: "Santiago",
        apellido: "Torres",
        telefono: "963-504", 
        ubicacion: { ciudad: "La Ceiba", direcion: "calle 12 Morazan Sur" },
    },
    {
        id: 3,
        nombre: "Nick",
        apellido: "Russo",
        telefono: "644-498", 
        ubicacion: { ciudad: "Río de Janeiro", direcion: "calle 5 Santa teresa" },
    },

];


function crearContacto (id, nombre, apellido, telefono, ubicacion) {
    const nuevoContacto = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono, 
            ubicacion: { ciudad: "Buenos Aires", direcion: "calle 4 Palermo" },

    };
    listaContactos.push(nuevoContacto);
}

console.log(listaContactos);

crearContacto(4, "Elena", "Blair", 156267);

console.log(listaContactos);


function eliminarContacto (id) {
    const indice = listaContactos.findIndex(function (crearContacto) {
        return crearContacto.id === id;
    });
    
    if (indice !== -1) {
        let nombreBorrado = listaContactos[indice].nombre + " " + listaContactos[indice].apellido;
        listaContactos.splice(indice, 1)
        
        
        //Mostrar mensaje de exito
        console.log("Contacto eliminado exitosamente:", nombreBorrado);
    } else {
       //Mostrar mensaje de error
        console.log("No se encontro ningun contacto con ese id:", id);
    }

}

eliminarContacto(1);
console.log(listaContactos);