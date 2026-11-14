//inscripcion.js -  Inscripcion a un taller.
const nombreTaller = "Panaderia: masa madre"; //Nombre del taller.
const precioTaller = 95000; //Precio del taller.
const matriculaPersona = 10000; //Matricula por persona.
const personasInscribir = 2; //Personas a inscribir.
const haycupos = true; //Constante booleana, si ambas codiciones se cumplen es = true.
let cupos = 8; //Cupos del grupo.

console.log("Taller:", nombreTaller); //Nombre del taller.
console.log("Precio por persona", precioTaller + matriculaPersona); //Precio por persona = el precio del taller + el costo de la matricula.
console.log(
  "Total para",
  personasInscribir,
  "personas:",
  105000 * personasInscribir,
); //Costo total para dos personas, total de costos (costo taller + costo matricula) * la cantidad de personas.
console.log("¿Hay cupos?", haycupos > 0); //Si la cantidad de cupos es mayor a 0 = true.
personasInscribir -= cupos;
console.log("cupos libres:", (personasInscribir -= cupos)); //Restar los cupos de las personas inscritas a los cupos que hay, puesto que estos ya estan ocupados, por lo que ya no estan disponibles.
console.log(
  "¿Menos de \u20A1250 000  y con cupos?",
  21000 < 25000 && haycupos > 0,
); //Es = true si cumple las dos condiciones (si el total de las dos personas (21000) es menor a 25 000 y si los cupos que hay son mayores a 0).
