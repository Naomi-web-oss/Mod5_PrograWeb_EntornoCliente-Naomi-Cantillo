//recorrer.js - Recorrer un vector con for y con for...of
const precios = [45000, 75000, 38000]; //Tarifas de Luz Clara.
let total = 0; //Acumulador.
for (let i = 0; i < precios.length; i++) {
  //Indice 0, 1 y 2.
  total += precios[i]; //Suma cada precio.
}
console.log("Total:", total);
for (const precio of precios) {
  console.log("Precio:", precio); //Cada elemento, sin indice.
}
