//& Tarea 1
// *1 - ingreso el apellido 
// *2 - calcular cantidad de caracteres 
// *3 - obtener la última letra del apellido

let apellido = prompt("Ingrese su apellido ");
let cantCaracteres = apellido.length;
console.log(apellido.at(-1))

//& Tarea 2
//* Dada la siguiente palabra "marmota" 
//* 1 - Pasarla a mayuscula 
//* 2 - Capitalizar la palabra (Marmota)

let palabra = "marmota";
console.log(palabra.toUpperCase());
console.log(palabra.at(0).toUpperCase()+ palabra.substring(1)) //^ substring devuelve una parte de la cadena empezando del caracter 1 hasta el final 

// let animal = "marmota";
// console.log(animal.toUpperCase());
// console.log(animal.at(0).toUpperCase() + animal.substring(1));