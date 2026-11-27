//reservas.js - ARRANQUE: une el modelo, la vista y el controlador.
const modelo = new Reservas(); //Instancia del modelo. Parentesis vacion porque el constructor no recibe datos.
const vista = new VistaReservas();
const reservas = new ControladorReservas(modelo, vista); //Instancia del controlador. Recibe los dos objetos ya creados.

reservas.reservar("Ana Rodriguez", "Familiar", 75000); //Metodo del controlador. Es la accion del usuario.
reservas.reservar("Luz Mora", "Perfil profesional", 38000);
reservas.reservar("Prueba", "Individual", 0);
reservas.actualizar();
