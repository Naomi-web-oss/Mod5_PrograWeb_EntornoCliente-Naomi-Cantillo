//objetos.js - Primer contacto: un vector de objetos.
const tarifas = [
  //Cada { } es un objeto.
  { servicio: "Individual", precio: 45000 },
  { servicio: "Familiar", precio: 75000 },
];
for (const t of tarifas) {
  console.log(`${t.servicio}: ${t.precio}`); //Punto: su dato.
}
