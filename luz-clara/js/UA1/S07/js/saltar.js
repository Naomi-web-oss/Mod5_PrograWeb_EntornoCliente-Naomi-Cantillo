//saltar.js - continue salta una vuelta; break termina el ciclo.
const servicios = ["Retrato", "Familiar", "Eventos", "Perfil"];
for (const s of servicios) {
  if (s === "Familiar") continue; //Salta a la siguiente vuelta.
  if (s === "Perfil") break; //Termine el ciclo.
  console.log(s);
}
console.log("Fuera del ciclo");
