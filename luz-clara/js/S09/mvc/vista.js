//vista.js - VISTA: Muestra los datos (por ahora en consola)
class VistaReservas {
  //La clase de la vista. Esta clase no tiene constructor porque no necesita guardar datos propios. JS le pone un constructor vacio.
  mostrar(lista) {
    lista.forEach((r, i) => {
      //i: posicion (r, i) dos parametros del callback.
      //forEach entrega el elemento (r) y su pocision (i) que empieza en cero.
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`); //r.cliente . r.servicio con propiedad de cada reserv. La vista solo lee datos, no los cambia.
    });
  }
  mostrarIngresos(monto) {
    console.log(`Ingresos: ₡${monto.toLocalString("es-CR")}`);
  }
  error(texto) {
    console.error(texto); //Mensaje en rojo.
  }
}
