//pagos.js - Plan de pago.
const escrito = "Panaderia: masa madre";
const servicio = escrito.trim();
const sesion = new Date(2026, 10, 21); //21 de noviembre (mes 10).
const total = 105000;
const cuotas = 4;
console.log("Taller: ", servicio.toUpperCase());
console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" }));
console.log(Number.isInteger(2.75));
console.log("Con", cuotas, "cuotas", Math.ceil(35000), "cada una");
