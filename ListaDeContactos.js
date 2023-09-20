//Lista de contactos predefinidos
let contactos = [
    "Alejandro Torres", "Antonela Bianculli", "Matias Galetto"
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombre, apellido) {
    contactos.push(nombre + " " + apellido);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombre, apellido) {
    const contacto = nombre + " " + apellido;
    const index = contactos.indexOf(contacto);
    if (index !== -1) {
        contactos.splice(index, 1);
    }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
    console.log ("Contactos:");
    for (let i = 0; i < contactos.length; i++) {
        console.log((i + 1) +". " + contactos[i]);
    }
}
