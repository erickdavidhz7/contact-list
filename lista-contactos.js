// Definiendo el ID contador
let idContador = 1;

// Definiendo la lista de contactos como un array con un contacto ingresado para cuestiones de testeo.
const listaContactos = [{
    id: 1,
    nombre: "Erick",
    apellido: "Henríquez",
    telefono: "321-4567890",
    ubicacion: {
        ciudad: "En un lugar con montañas",
        direccion: "por ahí"
    }
}];
// Función para añadir un contacto a la lista de contactos.
const añadirContacto = (nombreApellido, telefonoIngresado, ciudadIngresado, direccionIngresado) =>{
    // Se le aumenta 1 al ID contador por que sa he ingresado un nuevo contacto.
    idContador += 1;
    // Se separa el nombre y el apellido
    nombreApellido = nombreApellido.split(" ");
    let nombreIngresado = nombreApellido[0];
    let apellidoIngresado = nombreApellido[1];

    // Se itera sobre la lista de contactos
    for (const contacto of listaContactos) {
        if(contacto.nombre == nombreIngresado && contacto.apellido == apellidoIngresado) {
            console.log(`El contacto "${nombreIngresado} ${apellidoIngresado}" ya se encuentra en la lista de contactos.`);
            return; // parar la función porque ya se ha encontrado el contacto.
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
    // Se separa el nombre y el apellido
    contactoEliminar = contactoEliminar.split(" ");
    let nombreIngresado = contactoEliminar[0];
    let apellidoIngresado = contactoEliminar[1];

    // Se itera sobre la lista de contactos
    for (const contacto of listaContactos){
        if(contacto.nombre == nombreIngresado && contacto.apellido == apellidoIngresado) {
            const index = listaContactos.indexOf(contacto);
            listaContactos.splice(index, 1);
            console.log(`El contacto "${nombreIngresado} ${apellidoIngresado}" ha sido eliminado de la lista de contactos.`);
            return; // parar la función porque ya se ha encontrado el contacto y se ha eliminado.
        }
    }
    console.log(`No se ha encontrado el contacto "${nombreIngresado} ${apellidoIngresado}" en la lista de contactos.`);}

// Función para actualizar un contacto.
const actualizarContacto = (idIngresado, datoActualizar, respectivoDato) =>{
    // Se itera sobre la lista de contactos
    for (const contacto of listaContactos){
        if(contacto.id == idIngresado) {
            // Se checkea si el dato a actualizar es un dato valido para la lista de contacto
            switch (datoActualizar.toLowerCase()) {
                case "nombre":
                    contacto.nombre = respectivoDato;
                    break;
                case "apellido":
                    contacto.apellido = respectivoDato;
                    break;
                case "telefono":
                    contacto.telefono = respectivoDato;
                    break;
                case "ciudad":
                    contacto.ubicacion.ciudad = respectivoDato;
                    break;
                case "dirección":
                    contacto.ubicacion.direccion = respectivoDato;
                    break;
                default:
                    console.log("El dato a actualizar no es valido, por favor ingrese uno de los siguientes:\n- nombre\n- apellido\n- telefono\n- ciudad\n- dirección");
                    return; // parar la función porque el dato a actualizar no es valido.
            }
            console.log(`Se ha actualizado los datos del contacto "${contacto.nombre} ${contacto.apellido}" en la lista de contactos.`);
            return; // parar la función porque ya se ha encontrado el contacto y se ha eliminado.
        }
    }
    console.log(`No se ha encontrado el contacto "${nombreIngresado} ${apellidoIngresado}" en la lista de contactos.`);
}


// Función para imprimir lista de contactos.
const imprimirListaContactos = ()=>{
    console.log("La lista de contactos\nTiene los siguientes contactos:");
    for (const contacto of listaContactos) {
        console.log('---------------------------' );
        console.log(`-Contacto-\nID: ${contacto.id}\nNombre: ${contacto.nombre}\nApellido: ${contacto.apellido}`);
        console.log(`Teléfono: ${contacto.telefono}\nCiudad: ${contacto.ubicacion.ciudad}\nDirección: ${contacto.ubicacion.direccion}`);
        console.log('---------------------------' );

    }
}

// Función para correr todo el testeo del programa
function main(){
    // Llamando las respectivas funciones para testeo.
    imprimirListaContactos();
    añadirContacto("Yeison Chanel", "333-3015212", "Santo Tomas", "La 20 de Julio");
    // Cuando un contacto ya se ha añadido
    añadirContacto("Yeison Chanel", " 301-0515656", "Santo Tomas", "La 20 de Julio");
    // Añadiendo 2 contactos más para la visualización cuando se impriman los contactos
    añadirContacto("David Perez", "333-3444559", "Soledad", "Exito del guazimo");
    añadirContacto("Lautaro Javier", "330-0145755", "Bello", "La chinita");
    borrarContacto("David Perez");
    // Cuando un contacto no existe en la lista y se intenta eliminar
    borrarContacto("Lautaro Martinez");
    console.log('');
    imprimirListaContactos();
    console.log('');
    // Testeo multiples veces de actualizar contacto
    actualizarContacto(1, "telefono", "301-6962090")
    actualizarContacto(1, "dirección", "Calle 33a #78a-72")
    actualizarContacto(1, "ciudad", "Medellín")
    actualizarContacto(1, "blabla", "bubu")
    console.log('');
    imprimirListaContactos();
}

main()