// Definiendo la lista de contactos como un array con un contacto ingresado para cuestiones de testeo.
const listaContactos = [{
    id: 1,
    nombre: "Erick",
    apellido: "Henríquez",
    telefono: 3016962090,
    ubicacion: {
        ciudad: "Medellín",
        direccion: "por la 33a con 78a"
    }
}];
// Función para añadir un contacto a la lista de contactos.
const añadirContacto = (nombreApellido, telefonoIngresado, ciudadIngresado, direccionIngresado) =>{
    let idContador = listaContactos.length + 1;
    nombreApellido = nombreApellido.split(" ");
    let nombreIngresado = nombreApellido[0];
    let apellidoIngresado = nombreApellido[1];

    for (const contacto of listaContactos) {
        if(contacto.nombre == nombreIngresado && contacto.apellido == apellidoIngresado) {
            console.log(`El contacto "${nombreIngresado} ${apellidoIngresado}" ya se encuentra en la lista de contactos.`);
            return; // parar la función porque ya se ha encontrado el usuario.
        }
    }
    // Se define un nuevo objeto contacto con los datos ingresados por el usuario como valores de los atributos.
    const nuevoContacto = {
        id: idContador,
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        telefono: telefonoIngresado,
        ubicacion:{
            ciudad: ciudadIngresado,
            direccion: direccionIngresado
        }
    }
    // Se añade el objeto a la lista.
    listaContactos.push(nuevoContacto);
    console.log(`El contacto "${nombreIngresado} ${apellidoIngresado}" ha sido añadido a la lista de contactos.`);
}
// Functión para borrar contacto a la lista de contactos.
const borrarContacto = (contactoEliminar) =>{
    contactoEliminar = contactoEliminar.split(" ");
    let nombreIngresado = contactoEliminar[0];
    let apellidoIngresado = contactoEliminar[1];

    for (const contacto of listaContactos){
        if(contacto.nombre == nombreIngresado && contacto.apellido == apellidoIngresado) {
            const index = listaContactos.indexOf(contacto);
            listaContactos.splice(index, 1);
            console.log(`El contacto "${nombreIngresado} ${apellidoIngresado}" ha sido eliminado de la lista de contactos.`);
            return;
        }
    }
    console.log(`No se ha encontrado el contacto "${nombreIngresado} ${apellidoIngresado}" en la lista de contactos, por favor ingrese un contacto presente en la lista.`);
}
// Función para imprimir lista de contactos.
const imprimirListaContactos = ()=>{
    console.log("La lista de contactos\nTiene los siguientes contactos:");
    for (const contacto of listaContactos) {
        console.log(contacto);
    }
}

// Función para correr todo el testeo del programa
function main(){
    // Llamando las respectivas funciones para testeo.
    imprimirListaContactos();
    añadirContacto("Yeison Chanel", "333-3015212", "Santo Tomas", "La 20 de Julio");
    añadirContacto("Yeison Chanel", " 301-0515656", "Santo Tomas", "La 20 de Julio");
    añadirContacto("David Perez", "333-3444559", "Soledad", "Exito del guazimo");
    añadirContacto("Lautaro Javier", "330-0145755", "Bello", "La chinita");
    borrarContacto("David Perez");
    borrarContacto("Lautaro Martinez");
    imprimirListaContactos();
}

main()