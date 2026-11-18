//horario.js - ¿Abre ese día?.
try {
  //Pedir dia con prompt.
  const dia = prompt("¿Abre ese día?");
  const limpio = dia.trim().toLowerCase();
  //Switch.
  switch (limpio) {
    case "domingo":
    case "lunes":
      console.log(`dia ${limpio} esta cerrado`);
      break;
    default:
      console.log(`El ${limpio} abre de 10:00 a. m. a 7:00 p. m. `);
  }
} catch (error) {
  console.warn("No se indicó un día");
} finally {
  console.log("Casa Tomillo · Barrio Amón");
}
