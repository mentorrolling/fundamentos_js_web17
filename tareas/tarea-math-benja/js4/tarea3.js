let numeroDecimales = 7.40021;
let numero = Number(prompt("Coloque un numero para potenciar, sacarle la raiz cuadrada y multiplicar por un nmro aleatorio 1-10"));
let potencia = Math.pow(numero, 2);
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;



console.log (Math.floor(numeroDecimales));
console.log (Math.ceil(numeroDecimales));
console.log (numeroDecimales.toFixed(2));
console.log (potencia.toFixed(2),  "potencia");
console.log (Math.sqrt(numero), "raiz cuadrada");
console.log (numeroAleatorio * numero, "multiplicacion aleatoria")