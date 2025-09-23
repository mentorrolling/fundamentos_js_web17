/* Programa que reciba un número con más de 5 decimales y muestre en consola los siguientes datos:

1-El número redondeado a su valor más bajo
2-El número con dos decimales
3-El número elevado al cubo
4-La raíz cuadrada del número ingresado
5-El resultado de multiplicar el número ingresado con un número aleatorio entre 1 y 9 */

let numeroDecimales = Number(345.345789);
console.log(numeroDecimales);
//1-
console.log(Math.floor(numeroDecimales));
//2-
console.log(numeroDecimales.toFixed(2));
//3-
let cubo = numeroDecimales ** 3;
console.log(cubo)
//4-
let raiz =  Math.sqrt(numeroDecimales); 
console.log(raiz)
//5-
let random = Math.floor((Math.random()* 9)) + 1;
let resultado = numeroDecimales * random
console.log(resultado);