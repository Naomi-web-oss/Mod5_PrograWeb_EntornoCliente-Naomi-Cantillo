//solicitud.js - Pedir datos con prompt
const nombre = prompt("¿Cuál es su nombre?"); //Devuelve texto.
const fotos = prompt("¿Cuántas fotos impresas?"); //Devuelve texto.
console.log("Hola, " + nombre + "."); //+ une cadenas (concatenar).
console.log("Fotos + 1:", fotos + 1); //+ une: no suma.
console.log("Fotos + 1:", Number(fotos) + 1); //Lo pasamos a Number en este caso suma.
console.log("¿Pidió fotos?", Number(fotos) > 0); //comparar.
