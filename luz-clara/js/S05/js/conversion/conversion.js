//conversion.js - Convertir entre texto y numero.
console.log(Number("45000.5")); //Texto a numero.
console.log(parseInt("45000.5")); //Solo la parte entera.
console.log(parseFloat("45000.5")); //Con decimales.
console.log(parseInt("3 fotos")); //Lee hasta donde puede.
console.log(Number("3 fotos")); //NaN: no es un nùmero.
const precio = 75000 * 1.13; //84749.99999999999
console.log(precio); //Decimales de mas.
console.log(precio.toFixed(2)); //2 decimales (texto).
console.log(typeof precio.toFixed(2)); //String.
console.log(precio.toPrecision(3)); //3 cifras.
console.log(precio.toExponential(1)); //Notacion cientifica.
console.log((45000).toString() + 1); //Numero a texto: une.
