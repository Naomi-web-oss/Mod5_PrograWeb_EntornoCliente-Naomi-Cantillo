//modelo.js - MODELO: Los datos de las reservas y sus reglas.
class Reserva {
  //Clase con su nombre.
  constructor(cliente, servicio, precio) {
    //Constructor con sus metodos y parametros.
    this.cliente = cliente; //This el objeto se está creando. Cliente es la propiedad del objeto.
    this.servicio = servicio; //= cliente es el parametro en este caso.Al final va a tener la copia del dato dentro del objeto.
    this.precio = precio;
  }
}
class Reservas {
  //Segunda clase del modelo. Es el conjunto de todas las reservas en plural.
  constructor() {
    this.lista = []; //Todas las reservas. Propiedad vector empieza vacía y guarda objetos de Reserva(primera clase).
  }
  agregar(reserva) {
    //Metodo con parametro. En una clase, se escriben sin la palabra funtion.
    if (reserva.precio <= 0) {
      //Regla de negocio. reserva.precio es propiedad de otro objeto. reserva es el objeto Reserva que llego como argumento.
      return false; //No se guarda.
    }
    this.lista.push(reserva); //Hace un push sobre la propiedad para guardar la reserva en la lista de este objeto.
    return true; //Si cumple con el requisito si lo guarda.
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {
      //forEach con caliback.r es cada Reserva; se suma su precio.
      suma += r.precio;
    });
    return suma;
  }
}
