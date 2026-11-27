//Formato.js - Numeros con formato de Costa Rica (Intl).
const precio = 45000; //Numero.
console.log(precio.toLocaleString("es-CR")); //Separa miles.
const opciones = { style: "currency", currency: "CRC" }; //Colones.
const colones = new Intl.NumberFormat("es-CR", opciones); //Se crea una sola vez se usa muchas.
console.log(colones.format(precio)); //₡ y decimales.
console.log(colones.format(75000 * 1.13)); //Redondea solo.
