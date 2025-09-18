//Math (objeto)
let num1 = 23.55678;
//redondeo de números
console.log(Math.floor(num1)); //valor más bajo
console.log(Math.ceil(num1)); //valor más alto
console.log(Math.round(num1)); //redondea el valor decimal >= 5 mayor, decimal <5 menor

//número mayor en una lista
console.log(Math.max(20, 400, 1500, 560, 2000));

//número menor en una lista
console.log(Math.min(20, 400, 1500, 560, 2000));

let numString = "345.6789999999";
let pagarCuentas = true;
let billeteraDePablo = null;
let nombre = "Jaimito";

console.log(parseInt(pagarCuentas));
console.log(parseFloat(billeteraDePablo));
console.log(Number(nombre));

//Número con dos decimales
// let num1Decimal = Math.round(num1 * 100) / 100;
// console.log(num1Decimal);

let num1Float = Number(num1.toFixed(2));
console.log(num1Float);

//Busquen como calcular la raiz cuadrada de un número (Math)

//Cómo calcular el valor de un número elevado a una potencia (Math)

//Números aleatorios
console.log(Math.ceil(Math.random() * 50));
