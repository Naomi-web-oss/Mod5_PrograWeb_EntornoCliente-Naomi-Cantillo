//catalogo.js - Catálogo de talleres.
const taller = [
  { nombre: "Cocina de la casa · Inicial ", precio: 68000 },
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panaderìa · Masa madre", precio: 95000 },
  { nombre: "Panaderia . Pan de campo", precio: 70000 },
  { nombre: "Panaderia · Bollerìa", precio: 88000 },
  { nombre: "Reposterìa · Tartas", precio: 82000 },
  { nombre: "Reposterìa · Decoraciòn", precio: 58000 },
];
suma = 0; //Acumulador.
caros = 0; //Contador.
masCaro = taller[0];
let promedio = 0;

//for of muestre el taller.
for (const talleres of taller) {
  console.log(`${talleres.nombre} ₡${talleres.precio.toLocaleString("es-CR")}`);
  suma += talleres.precio;

  if (talleres.precio > 80000) {
    caros++;
  }
  if (talleres.precio > masCaro.precio) {
    masCaro = talleres;
  }
}

//Promedio.
promedio = Math.round(suma / taller.length);

console.log("Promedio", "₡", promedio.toLocaleString("es-CR"));
console.log("Más de 80 000:", caros);
console.log("El mas caro:", masCaro.nombre);
