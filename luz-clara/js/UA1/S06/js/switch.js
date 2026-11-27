//switch.js - Elegir entre varios casos.
const dia = "sábado"; //Día de la sesión.
switch (
  dia //Compara día con cada case.
) {
  case "sábado":
    console.log("Tarifa de fin de semana");
    break; //Sale del switch.
  case "domingo":
    console.log("Estudio cerrado");
    break;
  default: //Ningún case coincidió.
    console.log("Tarifa normal");
}
