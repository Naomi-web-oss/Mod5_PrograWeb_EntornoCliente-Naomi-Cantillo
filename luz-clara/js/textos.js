//texto.js - Metodos de las cadenas y plantillas.
const escrito = "  retrato familiar  "; //Con espacios demas.
const servicio = escrito.trim(); //Quita espacios.
console.log(escrito.length, servicio.length); //Cantidad de letras.
console.log(servicio.toUpperCase()); //Cambia a mayusculas.
console.log(servicio.includes("familiar")); //¿Contiene?.
console.log(servicio.slice(0, 7)); //De la letra 0 a la 6 = retrato.
console.log(`Servicio: ${servicio}`); //Plantilla con $ { }
