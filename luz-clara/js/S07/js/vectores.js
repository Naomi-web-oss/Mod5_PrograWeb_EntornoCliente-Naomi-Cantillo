//vectores.js - Un vector (array) guarda varios valores en orden.
const servicios = ["Retrato", "Familiar", "Eventos"]; //Corchetes.
console.log(servicios[0]); //Posiciòn 0: el primero.
console.log(servicios.length); //Cantidad de elementos.
servicios.push("Perfil"); //Agrega al final.
console.log(servicios.join(", ")); //Une todo en un texto.
const ultimo = servicios.pop(); //Quita el ùltimo.
console.log(ultimo, servicios.length); //El quitado y cuàntos quedan.
