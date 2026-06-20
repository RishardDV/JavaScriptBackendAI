//Esto es un comentario


//* Variables:
//* Sintaxis --> Reglas del lenguaje
let tituloTarea = "Comprar café";
const fechaCreacion = "19/06/2026";

console.log(tituloTarea);
console.log(fechaCreacion);


//! Tipos de variables
//& String
let mensaje = "Hola Mundo!";

//& Number
let unNumero = 4;
let otroNumero = 4.5;

//&& Boolean
let esValido = false;

//&& Undefined
let descripcion;
let descripcionNull = null;

console.log(descripcion);
console.log(descripcionNull);

console.log("Aca empiezan los operadores");
//* Operadores
//* + - * / 
let num1 = 5;
let num2 = 5;

console.log("Suma", (num1 + num2));
console.log("Resta", (num1 - num2));
console.log("Multiplicación", (num1 * num2));
console.log("División", (num1 / num2));


//* Operadores de comparación
console.log("Aca empiezan los operadores de comparación");
const prioridadA = 5;
const prioridadB = 3;

console.log(prioridadA > prioridadB);   // true
console.log(prioridadA < prioridadB);   // true

console.log(prioridadA === prioridadB);


//* Operadores lógicos
console.log("Aca empiezan los operadores lógicos");

const prioridadAlta = true;
const prioridadBaja = false;

console.log(prioridadAlta && !prioridadBaja);  
console.log(prioridadAlta || !prioridadBaja);  

const precioTexto = "5";

const precioNumero = Number(precioTexto);

const envio = 10;

 

console.log(precioNumero + envio);