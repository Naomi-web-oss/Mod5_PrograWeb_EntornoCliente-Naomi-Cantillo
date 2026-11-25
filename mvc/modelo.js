//modelo.js - MODELO: Los datos de las reservas y sus reglas.
class Reserva {
  constructor(cliente, servicio, precio) {
    this.cliente = cliente;
    this.servicio = servicio;
    this.precio = precio;
  }
}
class Reservas {
  constructor() {
    this.lista = []; //Todas las reservas.
  }
  agregar(reserva) {
    if (reserva.precio <= 0) {
      //Regla de negocio.
      return false; //No se guarda.
    }
    this.lista.push(reserva);
    return true; //Si cumple con el requisito si lo guarda.
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {
      suma += r.precio;
    });
    return suma;
  }
}
