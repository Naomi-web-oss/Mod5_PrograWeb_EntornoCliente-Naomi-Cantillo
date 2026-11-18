//cupos.js - Estado de los cupos.
const nivel = "Inicial";
const cupo = 6;
//If,else if,else.
if (cupo === 0) {
  console.error("Taller lleno");
} else if (cupo <= 2) {
  console.warn("¡Últimos cupos!");
} else {
  console.log("Hay cupos disponibles");
}

//Ternario.
console.log(cupo === 1 ? "<<Queda 1 cupo>>" : `Quedan ${cupo}`);
//Switch.
switch (nivel) {
  case "Inicial":
    console.log("No necesita experiencia");
    break;
  case "Intermedio":
    console.log("Requiere el nivel inicial");
    break;
  default:
    console.log("Consulte con la escuela");
}
