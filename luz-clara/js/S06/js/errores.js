//errores.js - try, catch y finally.
try {
  //Intenta ejecutar.
  console.log("Inicio");
  const nombre = null; //Como si se cancelara.
  console.log(nombre.toUpperCase()); //Falla: null no tiene métodos.
  console.log("Esta línea no se muestra");
} catch (error) {
  //Si algo falló, viene aquí.
  console.log("Se atrapó:", error.message);
} finally {
  //Siempre se ejecuta.
  console.log("Fin del intento");
}
console.log("El programa sigue"); //No se detuvo.
