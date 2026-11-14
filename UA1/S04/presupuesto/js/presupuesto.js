//presupuesto.js - Presupuesto con prompt.
const precioPersona = 105000; //Precio por persona.
const nombre = prompt("¿Cuál es su nombre?");
const cantidad = prompt("¿Cuál es la cantidad de personas?");
console.log("Hola,", nombre, "."); //Mostramos el nombre ingresado.
console.log("Personas:", Number(cantidad)); //Mostramos la cantidad ingresada.
console.log("Total:", precioPersona * Number(cantidad)); //Precio x cantidad de personas ingresadas.
console.log("¿Es grupo? (3 0 más)", Number(cantidad) >= 3); //Si el grupo es igual o mayor a 3 personas es = true.
