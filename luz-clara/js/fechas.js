//fechas.js - Fechas con Date.
const hoy = new Date(); //Fecha y hora de ahora = 16-11-2026.
console.log(hoy.getFullYear()); //año = 2026.
console.log(hoy.getMonth() + 1); //Mes: empieza en 0.
console.log(hoy.getDate()); //Dia del mes = lunes.
console.log(hoy.toLocaleDateString("es-CR")); //Formato de CR.
const sesion = new Date(2026, 11, 5); //5 de diciembre (mes 11).
console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" }));
