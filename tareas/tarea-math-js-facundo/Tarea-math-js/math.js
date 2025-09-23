// !Math
// &Programa que reciba un número con más de 5 decimales y muestre en consola los siguientes datos:
// *El número redondeado a su valor más bajo
let num = 16.9846213;
console.log(Math.floor(num))
// *El número con dos decimales
console.log(num.toFixed(2))
// *El número elevado al cubo
console.log(num ** 2)
// *La raíz cuadrada del número ingresado
console.log(Math.sqrt(16.9846213))
// *El resultado de multiplicar el número ingresado con un número aleatorio entre 1 y 9
let numAleatorio =Math.ceil( Math.random() * 10 );
let operacion = num * numAleatorio 
console.log(operacion)