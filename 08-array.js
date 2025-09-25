//Arrays o Arreglos
//lista de elementos

let estudiantes = ["José", "Rosa", "Mariela", "Pedro", "Armando"];
let numeros = [23, 56, 777, 342, 55];
let datos = ["Pablo", 42, "América 120", true, ["Fido", "Pelusa"]];

//Acceder a un elemento
console.log(estudiantes[2]);

//Cantidad de elementos
console.log(estudiantes.length);

//último elemento de un array
estudiantes[estudiantes.length - 1];
estudiantes.at(-1);

//Agregamos elementos
estudiantes.push("Martín", "Margarita"); //al final
estudiantes.unshift("Floripondia"); //al inicio

//Unir arrays
let estudiantesNuevos = ["Roberto", "Rubén", "Bautista", "Salomé"];
let estudiantesAvanzados = ["Bill Gates", "Tim Cook", "Elon Musk"];
let comision = estudiantes.concat(estudiantesNuevos, estudiantesAvanzados);

//Recorrer un array
console.log("Lista de Estudiantes");
console.log("--------------------");

for (let i = 0; i < comision.length; i++) {
  console.log(`${i + 1} - ${comision[i]}`);
}

let doble = [];
for (let i = 0; i < numeros.length; i++) {
  doble.push(numeros[i] * 2);
}
console.log(doble);

//Eliminar elementos de un array
comision.pop(); //eliminamos el último elemento
comision.shift(); //eliminar el primer elemento

//Uso de splice
//eliminar eleneto desde una posición
comision.splice(3, 1);
comision.splice(3, 3); //eliminamos 3 elementos desde la posición 3 incluida
comision.splice(4, 0, "Ernesto", "Lucas"); //agregar elementos desde una posición N
comision.splice(4, 2, "Josefina", "Ludovica");

//copiar un array

let comisionCopia = comision; //❌
let comisionBackup = comision.slice(0, 5);
