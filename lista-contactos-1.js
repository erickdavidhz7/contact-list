const listaContactos = ["Erick Apellido", "Harry Apellido","Yeison Apellido"];

const añadirContacto = (nombreApellido) =>{
    if (listaContactos.includes(nombreApellido)){
        console.log(`El contacto "${nombreApellido}" ya se encuentra en la lista de contactos\nNo es necesario añadirlo otra vez.`);
        return;
    }
    listaContactos.push(nombreApellido);
    console.log(`El contacto "${nombreApellido}" se ha añadido a la lista de contactos.`);
}
// Functión para borrar contacto
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
// Llamando las respectivas funciones para testeo.
imprimirListaContactos();
añadirContacto("Andrew Apellido");
borrarContacto("Erick Apellido");
imprimirListaContactos();
