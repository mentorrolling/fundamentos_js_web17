/*Dada la siguiente palabra "marmota"  
1 - Pasarla a mayuscula  
2 - Capitalizar la palabra (Marmota) */

let palabra = 'marmota'
//1-
let mayuscula = palabra.toUpperCase();
console.log(mayuscula);
//2-
let capitalizar = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
console.log(capitalizar);