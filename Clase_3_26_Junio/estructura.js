//! Arreglos 

let nombre = "Ana";

let nombre2 = "Carlos";

let nombre3 = "Pepito";

 

let asistentes = ["JuanFe", "Richard", "Ana"];

console.log(asistentes[0]);

console.log(asistentes[1]);

console.log(asistentes[2]);

console.log(asistentes[3]);

let carrito = ["Pizza", "Gaseosa"];

carrito.push("Postre")   // agrega al final

console.log(carrito);        // [ 'Pizza', 'Gaseosa', 'Postre' ]

carrito.pop();               // elimina el último

console.log(carrito);        // [ 'Pizza', 'Gaseosa' ]

carrito[0] = "Hamburguesa";  // cambia el de la posición 0

console.log(carrito);        // [ 'Hamburguesa', 'Gaseosa' ]

//! Objetos

let perfilUser = ["Ana", 60, "profe", "Zipaquirá"]

console.log(perfilUser);

 

let perfilUsuario = {

  nombre: "Andrés",

  edad: 30,

  ciudad: "Cali"

};

console.log(perfilUsuario);

console.log(perfilUsuario.nombre);   // Andrés

console.log(perfilUsuario.edad);     // 30

//! Operaciones que se pueden 

let cliente = { 

    nombre: "Andrés", 

    edad: 30 

};

cliente.ciudad = "Cali";     // agrega una nueva clave

console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }

cliente.edad = 31;           // cambia un valor existente

console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }

delete cliente.edad;         // elimina una clave

console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }