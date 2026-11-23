//desicion.js - if, else if y else.
const horas = 2; //Duración de la sesión.
if (horas <= 1) {
  //¿Una hora o menos?.
  console.log("Sesión corta");
} else if (horas <= 3) {
  //Si no: ¿tres horas o menos?.
  console.log("Sesión media");
} else {
  //En cualquier otro caso.
  console.log("Sesión larga");
}
console.log("Fin de la decisión"); //Se ejecuta siempre.
