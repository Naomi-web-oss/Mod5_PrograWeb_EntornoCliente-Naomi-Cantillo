//controlador.js - CONTROLADOR:recibe la accion y coordina.
class ControladorReservas {
  constructor(modelo, vista) {
    this.modelo = modelo; //Guarda las dos partes en una propiedad.
    this.vista = vista;
  }
  reservar(cliente, servicio, precio) {
    const nueva = new Reserva(cliente, servicio, precio); //Crea una instancia y usa 1 clase.
    if (!this.modelo.agregar(nueva)) {
      //! no logico invierte el boleano.
      this.vista.error(`Precio invalido para ${cliente}`);
    }
  }
  actualizar() {
    //Usa las dos partes. toma los datos del modelo y se los entrega a la vista.
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostrarIngresos(this.modelo.ingresos());
  }
}
