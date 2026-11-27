//semana.js - Semana de talleres
const dias = [
  //Dias y talleres -
  "Martes",
  "Cocina inicial · Tartas",
  "Miércoles",
  "Masa madres",
  "Jueves",
  "Cocina intermedia",
  "Viernes",
  "Pan de campo",
  "Sábado",
  "Bollería · Decoración",
];
for (const dia of semana) {
  const cantidad = dia.legth - 1;
  console.log(`${dia[0]} (${cantidad}: ${dia.slice(1).join(", ")}`);
}
