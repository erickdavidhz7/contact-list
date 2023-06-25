// Definiendo la lista de contactos como un array con un contacto ingresado para cuestiones de testeo.
const listaContactos = [{
    id: 123456,
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
    // Se han definido un rango minimo y máximo para generar el número del ID que es de 6 digitos
    const idMin = 100000;
    const idMax = 199999;
    // Se genera un número aleatorio entre 100,000 y 199,999 para generar el ID
    let idContador = Math.floor(Math.random() * (idMax - idMin) + idMin);
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
}

main()