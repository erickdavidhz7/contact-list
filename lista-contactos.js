// Definiendo la lista de contactos como un array con un contacto ingresado para cuestiones de testeo.
const listaContactos = [{
    id: 1,
    nombre: "Erick",
    apellido: "Henríquez",
    telefono: 3016962090,
    ubicacion: {
        ciudad: "Medellín",
        direccion: "Calle 33a #78a-72"
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
}
// Functión para borrar contacto a la lista de contactos.
const borrarContacto = (contactoEliminar) =>{
    if(listaContactos.indexOf(contactoEliminar) == -1){
        console.log(`No se ha encontrado el contacto "${contactoEliminar}" en la lista de contactos.\nPor favor ingrese un contacto presente en la lista.`);
    }else{
        const index = listaContactos.indexOf(contactoEliminar);
        listaContactos.splice(index, 1);
        console.log(`El contacto "${contactoEliminar}" ha sido eliminado de la lista de contactos.`);
    }
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
añadirContacto("Erick Chanel", 3016962010, "Barranquilla", "La 20 de Julio");
añadirContacto("David Perez", 3016962015, "Soledad", "Exito del guazimo");
añadirContacto("Lautaro Javier", 3016962016, "Bello", "La chinita");

imprimirListaContactos();
}

main()